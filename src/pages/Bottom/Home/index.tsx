import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getItem, setItem} from '../../../mmkv';
import {ICoinDetail} from '../../../constants/types';
import {FavItem} from './components';
import globalStyle from '../../../constants/style';
import {useIsFocused} from '@react-navigation/native';
import styles from './style';
import Icon from '../../../components/Icon';
let storageName = 'favorites';
export default function Home() {
  const [favCoins, setFavCoins] = useState<ICoinDetail[]>([]);
  const [selectedItems, setSelectedItems] = useState<ICoinDetail[]>([]);
  const [refresh, setRefresh] = useState<boolean>(true);

  const isFocused = useIsFocused();

  useEffect(() => {
    isFocused && getData();
  }, [isFocused]);

  const getData = () => {
    let arr: ICoinDetail[] = getItem(storageName);
    setFavCoins(arr);
    setRefresh(false);
  };

  const deleteFavorites = () => {
    setRefresh(true);
    let arr: ICoinDetail[] = getItem(storageName);
    selectedItems.map(s => {
      arr = arr.filter(x => x?.code != s?.code);
    });
    setItem(storageName, arr);
    getData();
    setSelectedItems([]);
  };

  const onPressCheck = (item: ICoinDetail, check: boolean) => {
    setSelectedItems(SI => {
      if (check) {
        return [...SI, item];
      } else {
        return SI.filter(x => x.code !== item.code);
      }
    });
  };

  const renderItem = ({item}: {item: ICoinDetail}) => {
    let check = false,
      isThere = selectedItems.find(x => x.code == item.code);
    check = isThere != undefined ? true : false;

    return <FavItem check={check} item={item} onPressCheck={onPressCheck} />;
  };

  return (
    <View style={globalStyle.globalContainer}>
      <FlatList data={favCoins} renderItem={renderItem} />
      {selectedItems.length > 0 && (
        <Pressable onPress={deleteFavorites} style={styles.deleteContainer}>
          <Text style={styles.deleteText}>
            {selectedItems.length} item selected
          </Text>
          <View style={styles.deleteButton}>
            <Text style={styles.deleteText}>Delete</Text>
            <Icon name="delete : materialcomm" size={20} color="white" />
          </View>
        </Pressable>
      )}
    </View>
  );
}
