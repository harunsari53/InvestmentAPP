import {View, Text, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {exchangeService} from '../../../services';
import globalStyle from '../../../constants/style';
import {IExchangeDetail} from '../../../constants/types';
import styles from './style';
import {getItem, setItem} from '../../../mmkv';
import {useNavigation} from '@react-navigation/native';

export default function ExchangeDetail(props: any) {
  const {code} = props?.route?.params; //neden code oluşturduk?
  const [exchange, setExchange] = useState<IExchangeDetail>();
  const [loading, setLoading] = useState<boolean>();
  const [isThere, setIsThere] = useState(false);

  const navigation = useNavigation<any>();

  useEffect(() => {
    getDetail();
    checkIsThere();
  }, []);

  const checkIsThere = () => {
    const data: IExchangeDetail[] = getItem('favorites');
    let isThere: any = data?.find(x => x.code == code);
    setIsThere(isThere != undefined ? true : false);
  };

  const getDetail = () => {
    setLoading(true);
    exchangeService
      .getExchangeDetails({code}) //code ne işe yarıyor?
      .then(res => {
        if (res?.data?.status === 'success') {
          setExchange(res?.data?.data?.[0]); //neden 0.eleman olarak setliyoruz?
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
    if (exchange) {
      let storageName = 'favorites';
      const data: IExchangeDetail[] = getItem(storageName);
      if (typeof data === 'undefined') {
        let arr: IExchangeDetail[] = [];
        arr.push({...exchange, routeName: 'ExchangeDetail'});
        setItem(storageName, arr);
      } else {
        let arr: IExchangeDetail[] = data.filter(x => x.code !== exchange.code);
        arr.push({...exchange, routeName: 'ExchangeDetail'});
        setItem(storageName, arr);
      }
      setIsThere(true);
    }
  };

  return (
    <View style={[globalStyle.globalContainer, styles.container]}>
      <Text style={styles.title}>{exchange?.ShortName}</Text>
      <View style={[styles.codeContainer, globalStyle.darkShadow]}>
        <Text>Buying Code: {exchange?.MoneyCode1}</Text>
        <Text>Currency Code: {exchange?.MoneyCode2}</Text>
        <Text style={styles.codeAbsolute}>{code}</Text>
      </View>
      <View style={styles.priceContainer}>
        <View style={styles.prices}>
          <View style={styles.priceAndTitleContainer}>
            <Text style={styles.priceTitle}>Selling</Text>
            <Text style={styles.sellingPrice}>
              {exchange?.selling + ' ' + exchange?.selling}
            </Text>
          </View>
          <View style={styles.priceAndTitleContainer}>
            <Text style={styles.priceTitle}>Latest</Text>
            <Text style={styles.latestPrice}>
              {exchange?.latest + ' ' + exchange?.selling}
            </Text>
          </View>
          <View style={styles.priceAndTitleContainer}>
            <Text style={styles.priceTitle}>Buying</Text>
            <Text style={styles.buyingPrice}>
              {exchange?.buying + ' ' + exchange?.buying}
            </Text>
          </View>
        </View>
        <View style={styles.prices}>
          <View style={styles.priceAndTitleContainer}>
            <Text style={styles.priceTitle}>Minimum</Text>
            <Text style={styles.sellingPrice}>
              {exchange?.dayMin + ' ' + exchange?.selling}
            </Text>
          </View>
          <View style={styles.priceAndTitleContainer}>
            <Text style={styles.priceTitle}>Change Rate</Text>
            <Text style={styles.latestPrice}>
              {'%' + exchange?.changeRate.toFixed(2)}
            </Text>
          </View>
          <View style={styles.priceAndTitleContainer}>
            <Text style={styles.priceTitle}>Maximum</Text>
            <Text style={styles.buyingPrice}>
              {exchange?.dayMax + ' ' + exchange?.selling}
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
