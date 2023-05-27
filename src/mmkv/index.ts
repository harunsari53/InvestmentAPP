import {MMKV} from 'react-native-mmkv';

const storage: any = new MMKV();

const getItem = (storageName: string) => {
  if (storage.getString(storageName) != undefined) {
    return JSON.parse(storage.getString(storageName));
  }
};

const setItem = (storageName: string, data: any) => {
  storage.set(storageName, JSON.stringify(data));
};

export {getItem, setItem};
