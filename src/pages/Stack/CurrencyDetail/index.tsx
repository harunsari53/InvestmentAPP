import {View, Text, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {currencyService} from '../../../services';
import globalStyle from '../../../constants/style';
import {ICurrencyDetail} from '../../../constants/types';
import styles from './style';
import {getItem, setItem} from '../../../mmkv';
import {useNavigation} from '@react-navigation/native';

export default function CurrencyDetail(props: any) {
  const {code} = props?.route?.params; //neden code oluşturduk?
  const [currency, setCurrency] = useState<ICurrencyDetail>();
  const [loading, setLoading] = useState<boolean>();
  const [isThere, setIsThere] = useState(false);

  const navigation = useNavigation<any>();

  useEffect(() => {
    getDetail();
    checkIsThere();
  }, []);

  const checkIsThere = () => {
    const data: ICurrencyDetail[] = getItem('favorites');
    let isThere: any = data?.find(x => x.code == code);
    setIsThere(isThere != undefined ? true : false);
  };

  const getDetail = () => {
    setLoading(true);
    currencyService
      .getCurrencyDetails({code}) //code ne işe yarıyor?
      .then(res => {
        if (res?.data?.status === 'success') {
          setCurrency(res?.data?.data?.[0]); //neden 0.eleman olarak setliyoruz?
        }
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const addToFavorites = () => {
    if (isThere) return navigation.navigate('Favorites');
    if (currency) {
      let storageName = 'favorites';
      const data: ICurrencyDetail[] = getItem(storageName);
      if (typeof data === 'undefined') {
        let arr: ICurrencyDetail[] = [];
        arr.push({...currency, routeName: 'CurrencyDetail'});
        setItem(storageName, arr);
      } else {
        let arr: ICurrencyDetail[] = data.filter(x => x.code !== currency.code);
        arr.push({...currency, routeName: 'CurrencyDetail'});
        setItem(storageName, arr);
      }
      setIsThere(true);
    }
  };

  return (
    <View style={[globalStyle.globalContainer, styles.container]}>
      <Text style={styles.title}>{currency?.ShortName}</Text>
      <View style={[styles.codeContainer, globalStyle.darkShadow]}>
        <Text>Buying Code: {currency?.buying}</Text>
        <Text>Currency Code: {currency?.selling}</Text>
        <Text style={styles.codeAbsolute}>{code}</Text>
      </View>
      <View style={styles.priceContainer}>
        <View style={styles.prices}>
          <View style={styles.priceAndTitleContainer}>
            <Text style={styles.priceTitle}>Selling</Text>
            <Text style={styles.sellingPrice}>
              {currency?.selling + ' ' + currency?.buying}
            </Text>
          </View>
          <View style={styles.priceAndTitleContainer}>
            <Text style={styles.priceTitle}>Latest</Text>
            <Text style={styles.latestPrice}>
              {currency?.latest + ' ' + currency?.selling}
            </Text>
          </View>
          <View style={styles.priceAndTitleContainer}>
            <Text style={styles.priceTitle}>Buying</Text>
            <Text style={styles.buyingPrice}>
              {currency?.buying + ' ' + currency?.buying}
            </Text>
          </View>
        </View>
        <View style={styles.prices}>
          <View style={styles.priceAndTitleContainer}>
            <Text style={styles.priceTitle}>Minimum</Text>
            <Text style={styles.sellingPrice}>
              {currency?.dayMin + ' ' + currency?.selling}
            </Text>
          </View>
          <View style={styles.priceAndTitleContainer}>
            <Text style={styles.priceTitle}>Change Rate</Text>
            <Text style={styles.latestPrice}>
              {'%' + currency?.changeRate.toFixed(2)}
            </Text>
          </View>
          <View style={styles.priceAndTitleContainer}>
            <Text style={styles.priceTitle}>Maximum</Text>
            <Text style={styles.buyingPrice}>
              {currency?.dayMax + ' ' + currency?.buying}
            </Text>
          </View>
        </View>
      </View>
      <Pressable style={styles.button} onPress={addToFavorites}>
        <Text style={styles.buttonText}>
          {isThere ? 'Go To Favorites' : 'Add To Favorites'}
        </Text>
      </Pressable>
    </View>
  );
}
