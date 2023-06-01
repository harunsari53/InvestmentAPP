import {View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import globalStyle from '../../../constants/style';
import {currencyService} from '../../../services';
import {IItem} from '../../../constants/types';
import {CurrencyItem} from './components';

export default function Currency() {
  const [loading, setLoading] = useState<boolean>(false);
  const [currencyList, setCurrencyList] = useState<IItem[]>([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setLoading(true);
    currencyService
      .getCurrency()
      .then(res => {
        console.log(res?.data?.rowCount);
        setCurrencyList(res?.data?.data);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const renderCurrency = ({item}: {item: IItem}) => (
    <CurrencyItem currency={item} />
  );

  return (
    <View style={globalStyle.globalContainer}>
      <FlatList data={currencyList} renderItem={renderCurrency} />
    </View>
  );
}