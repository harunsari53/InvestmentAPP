import {View, Text, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {emtiaService} from '../../../services';
import globalStyle from '../../../constants/style';
import {IEmtiaDetail} from '../../../constants/types';
import styles from './style';
import {getItem, setItem} from '../../../mmkv';
import {useNavigation} from '@react-navigation/native';

export default function EmtiaDetail(props: any) {
  const {code} = props?.route?.params; //neden code oluşturduk?
  const [emtia, setEmtia] = useState<IEmtiaDetail>();
  const [loading, setLoading] = useState<boolean>();
  const [isThere, setIsThere] = useState(false);

  const navigation = useNavigation<any>();

  useEffect(() => {
    getDetail();
    checkIsThere();
  }, []);

  const checkIsThere = () => {
    const data: IEmtiaDetail[] = getItem('favorites');
    let isThere: any = data?.find(x => x.code == code);
    setIsThere(isThere != undefined ? true : false);
  };

  const getDetail = () => {
    setLoading(true);
    emtiaService
      .getEmtiaDetails({code}) //code ne işe yarıyor?
      .then(res => {
        if (res?.data?.status === 'success') {
          setEmtia(res?.data?.data?.[0]); //neden 0.eleman olarak setliyoruz?
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
    if (emtia) {
      let storageName = 'favorites';
      const data: IEmtiaDetail[] = getItem(storageName);
      if (typeof data === 'undefined') {
        let arr: IEmtiaDetail[] = [];
        arr.push(emtia);
        setItem(storageName, arr);
      } else {
        let arr: IEmtiaDetail[] = data.filter(x => x.code !== emtia.code);
        arr.push(emtia);
        setItem(storageName, arr);
      }
      setIsThere(true);
    }
  };

  return (
    <View style={[globalStyle.globalContainer, styles.container]}>
      <Text style={styles.title}>{emtia?.ShortName}</Text>
      <View style={[styles.codeContainer, globalStyle.darkShadow]}>
        <Text>Buying Code: {emtia?.buying}</Text>
        <Text>Currency Code: {emtia?.selling}</Text>
        <Text style={styles.codeAbsolute}>{code}</Text>
      </View>
      <View style={styles.priceContainer}>
        <View style={styles.prices}>
          <View style={styles.priceAndTitleContainer}>
            <Text style={styles.priceTitle}>Selling</Text>
            <Text style={styles.sellingPrice}>
              {emtia?.selling + ' ' + emtia?.selling}
            </Text>
          </View>
          <View style={styles.priceAndTitleContainer}>
            <Text style={styles.priceTitle}>Latest</Text>
            <Text style={styles.latestPrice}>
              {emtia?.latest + ' ' + emtia?.selling}
            </Text>
          </View>
          <View style={styles.priceAndTitleContainer}>
            <Text style={styles.priceTitle}>Buying</Text>
            <Text style={styles.buyingPrice}>
              {emtia?.buying + ' ' + emtia?.buying}
            </Text>
          </View>
        </View>
        <View style={styles.prices}>
          <View style={styles.priceAndTitleContainer}>
            <Text style={styles.priceTitle}>Minimum</Text>
            <Text style={styles.sellingPrice}>
              {emtia?.dayMin + ' ' + emtia?.selling}
            </Text>
          </View>
          <View style={styles.priceAndTitleContainer}>
            <Text style={styles.priceTitle}>Change Rate</Text>
            <Text style={styles.latestPrice}>
              {'%' + emtia?.changeRate.toFixed(2)}
            </Text>
          </View>
          <View style={styles.priceAndTitleContainer}>
            <Text style={styles.priceTitle}>Maximum</Text>
            <Text style={styles.buyingPrice}>
              {emtia?.dayMax + ' ' + emtia?.selling}
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
