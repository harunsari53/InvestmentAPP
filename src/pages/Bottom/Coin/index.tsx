import {View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import globalStyle from '../../../constants/style';
import {coinService} from '../../../services';
import {IItem} from '../../../constants/types';
import {CoinItem} from './components';

export default function Coin() {
  const [loading, setLoading] = useState<boolean>(false);
  const [coinList, setCoinList] = useState<IItem[]>([]);
  
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setLoading(true);
    coinService
      .getCoins()
      .then(res => {
        setCoinList(res?.data?.data);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const renderCoin = ({item}: {item: IItem}) => <CoinItem coin={item} />;

  return (
    <View style={globalStyle.globalContainer}>
      <FlatList data={coinList} renderItem={renderCoin} />
    </View>
  );
}