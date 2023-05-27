import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {ICurrency} from '../../../../../constants/types';
import globalStyle from '../../../../../constants/style';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

export default function CurrencyItem({currency}: {currency: ICurrency}) {
  const navigation = useNavigation<any>();

  const onPressCurrency = () => {
    navigation.navigate('CurrencyDetail', {code: currency.code});
  };

  return (
    <Pressable
      onPress={onPressCurrency}
      style={[styles.container, globalStyle.midShadow]}>
      <View>
        <Text style={styles.shortName}>{currency?.ShortName}</Text>
        <Text style={styles.fullName}>{currency?.FullName}</Text>
      </View>
      <Text style={styles.code}>{currency?.code}</Text>
    </Pressable>
  );
}
