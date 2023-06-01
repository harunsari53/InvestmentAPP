import {View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import globalStyle from '../../../constants/style';
import { emtiaService} from '../../../services';
import {IItem} from '../../../constants/types';
import {EmtiaItem} from './components';

export default function Emtia() {
  const [loading, setLoading] = useState<boolean>(false);
  const [emtiaList, setEmtiaList] = useState<IItem[]>([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setLoading(true);
    emtiaService
      .getEmtia()
      .then(res => {
        console.log(res?.data?.rowCount);
        setEmtiaList(res?.data?.data);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const renderEmtia = ({item}: {item: IItem}) => <EmtiaItem emtia={item} />;

  return (
    <View style={globalStyle.globalContainer}>
      <FlatList data={emtiaList} renderItem={renderEmtia} />
    </View>
  );
}