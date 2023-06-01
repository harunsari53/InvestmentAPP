import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {IItem} from '../../../../../constants/types';
import styles from './style';
import globalStyle from '../../../../../constants/style';
import {useNavigation} from '@react-navigation/native';

export default function EmtiaItem({emtia}: {emtia: IItem}) {
  const navigation = useNavigation<any>();

  const onPressEmtia = () => {
    navigation.navigate('EmtiaDetail', {code: emtia.code});
  };

  return (
    <Pressable
      onPress={onPressEmtia}
      style={[styles.container, globalStyle.midShadow]}>
      <View>
        <Text style={styles.shortName}>{emtia.ShortName}</Text>
        <Text style={styles.fullName}>{emtia.FullName}</Text>
      </View>
      <Text style={styles.code}>{emtia.code}</Text>
    </Pressable>
  );
}
