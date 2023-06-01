import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {IAllDetails} from '../../../../../constants/types';
import styles from './style';
import globalStyle from '../../../../../constants/style';
import {useNavigation} from '@react-navigation/native';
import CheckBox from '../../../../../components/Checkbox';

const FavItem = ({
  item,
  check,
  onPressCheck,
}: {
  item: IAllDetails;
  check: boolean;
  onPressCheck: (item: IAllDetails, check: boolean) => void;
}) => {
  const navigation = useNavigation<any>();

  const onPressCoin = () => {
    navigation.navigate(item?.routeName, {code: item?.code});
  };

  const checkChanged = (check: boolean) => {
    onPressCheck(item, check);
  };

  return (
    <View style={styles.row}>
      <CheckBox check={check} onPressCheck={checkChanged} />
      <Pressable
        onPress={onPressCoin}
        style={[styles.container, globalStyle.midShadow]}>
        <View>
          <Text style={styles.shortName}>{item?.ShortName}</Text>
          <Text style={styles.fullName}>{item?.FullName}</Text>
        </View>
        <Text style={styles.code}>{item?.code}</Text>
      </Pressable>
    </View>
  );
};

export default FavItem;
