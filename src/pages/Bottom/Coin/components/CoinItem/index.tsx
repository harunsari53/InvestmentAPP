import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {ICoin} from '../../../../../constants/types';
import styles from './style';
import globalStyle from '../../../../../constants/style';
import {useNavigation} from '@react-navigation/native';

export default function CoinItem({coin}: {coin: ICoin}) {

  const navigation = useNavigation<any>();
  
  const onPressCoin = () => {
    navigation.navigate('CoinDetail', {code: coin.code});
  };

  return (
    <Pressable
      onPress={onPressCoin}
      style={[styles.container, globalStyle.midShadow]}>
      <View>
        <Text style={styles.shortName}>{coin.ShortName}</Text>
        <Text style={styles.fullName}>{coin.FullName}</Text>
      </View>
      <Text style={styles.code}>{coin.code}</Text>
    </Pressable>
  );
}