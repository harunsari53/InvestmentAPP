import {View, Text, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {coinService} from '../../../services';
import globalStyle from '../../../constants/style';
import {ICoinDetail} from '../../../constants/types';
import styles from './style';
import {getItem, setItem} from '../../../mmkv';
import {useNavigation} from '@react-navigation/native';

export default function CoinDetail(props: any) {
  const {code} = props?.route?.params; //neden code oluşturduk?
  const [coin, setCoin] = useState<ICoinDetail>();
  const [loading, setLoading] = useState<boolean>();
  const [isThere, setIsThere] = useState(false);

  const navigation = useNavigation<any>();

  useEffect(() => {
    getDetail();
    checkIsThere();
  }, []);

  const checkIsThere = () => {
    const data: ICoinDetail[] = getItem('favorites');
    let isThere: any = data?.find(x => x.code == code);
    setIsThere(isThere != undefined ? true : false);
  };

  const getDetail = () => {
    setLoading(true);
    coinService
      .getCoinDetails({code}) //code ne işe yarıyor?
      .then(res => {
        if (res?.data?.status === 'success') {
          setCoin(res?.data?.data?.[0]); //neden 0.eleman olarak setliyoruz?
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
    if (coin) {
      let storageName = 'favorites';
      const data: ICoinDetail[] = getItem(storageName);
      if (typeof data === 'undefined') {
        let arr: ICoinDetail[] = [];
        arr.push({...coin, routeName: 'CoinDetail'});
        setItem(storageName, arr);
      } else {
        let arr: ICoinDetail[] = data.filter(x => x.code !== coin.code);
        arr.push({...coin, routeName: 'CoinDetail'});
        setItem(storageName, arr);
      }
      setIsThere(true);
    }
  };

  return (
    <View style={[globalStyle.globalContainer, styles.container]}>
      <Text style={styles.title}>{coin?.ShortName}</Text>
      <View style={[styles.codeContainer, globalStyle.darkShadow]}>
        <Text>Buying Code: {coin?.Ccode}</Text>
        <Text>Currency Code: {coin?.Mcode}</Text>
        <Text style={styles.codeAbsolute}>{code}</Text>
      </View>
      <View style={styles.priceContainer}>
        <View style={styles.prices}>
          <View style={styles.priceAndTitleContainer}>
            <Text style={styles.priceTitle}>Selling</Text>
            <Text style={styles.sellingPrice}>
              {coin?.selling + ' ' + coin?.Mcode}
            </Text>
          </View>
          <View style={styles.priceAndTitleContainer}>
            <Text style={styles.priceTitle}>Latest</Text>
            <Text style={styles.latestPrice}>
              {coin?.latest + ' ' + coin?.Mcode}
            </Text>
          </View>
          <View style={styles.priceAndTitleContainer}>
            <Text style={styles.priceTitle}>Buying</Text>
            <Text style={styles.buyingPrice}>
              {coin?.buying + ' ' + coin?.Mcode}
            </Text>
          </View>
        </View>
        <View style={styles.prices}>
          <View style={styles.priceAndTitleContainer}>
            <Text style={styles.priceTitle}>Minimum</Text>
            <Text style={styles.sellingPrice}>
              {coin?.dayMin + ' ' + coin?.Mcode}
            </Text>
          </View>
          <View style={styles.priceAndTitleContainer}>
            <Text style={styles.priceTitle}>Change Rate</Text>
            <Text style={styles.latestPrice}>
              {'%' + coin?.changeRate.toFixed(2)}
            </Text>
          </View>
          <View style={styles.priceAndTitleContainer}>
            <Text style={styles.priceTitle}>Maximum</Text>
            <Text style={styles.buyingPrice}>
              {coin?.dayMax + ' ' + coin?.Mcode}
            </Text>
          </View>
        </View>
        <View style={styles.volumeContainer}>
          <Text style={styles.volumeTitle}>Total Volume: </Text>
          <Text numberOfLines={1} style={styles.volume}>
            {Number(coin?.volume).toFixed(3) + ' Mio'}
          </Text>
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
