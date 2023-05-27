import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import globalStyle from '../../../constants/style';
import {exchangeService} from '../../../services';
import {IExhange} from '../../../constants/types';
import {ExchangeItem} from './components';

export default function Exchange() {
  const [loading, setLoading] = useState<boolean>(false);
  const [exchangeList, setExchangeList] = useState<IExhange[]>([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setLoading(true);
    exchangeService
      .getExchange()
      .then(res => {
        console.log(res?.data?.rowCount);
        setExchangeList(res?.data?.data);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const renderExchange = ({item}: {item: IExhange}) => (
    <ExchangeItem exchange={item} />
  );

  return (
    <View style={globalStyle.globalContainer}>
      <FlatList data={exchangeList} renderItem={renderExchange} />
    </View>
  );
}