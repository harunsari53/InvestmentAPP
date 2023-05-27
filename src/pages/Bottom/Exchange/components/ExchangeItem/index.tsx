import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {IExhange} from '../../../../../constants/types';
import styles from './style';
import globalStyle from '../../../../../constants/style';
import {useNavigation} from '@react-navigation/native';

export default function ExchangeItem({exchange}: {exchange: IExhange}) {
  const navigation = useNavigation<any>();

  const onPressExchange = () => {
    navigation.navigate('ExchangeDetail', {code: exchange.code});
  };

  return (
    <Pressable
      onPress={onPressExchange}
      style={[styles.container, globalStyle.midShadow]}>
      <View>
        <Text style={styles.fullName}>{exchange?.FullName}</Text>
        <Text style={styles.description}>{exchange?.description}</Text>
      </View>
      <Text style={styles.code}>{exchange?.code}</Text>
    </Pressable>
  );
}
