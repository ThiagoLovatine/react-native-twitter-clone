import AsyncStorage from '@react-native-community/async-storage';
import Config from '../constants/config';

export const getObject = async object_key => {
  const object = await AsyncStorage.getItem(Config.storeName + object_key);
  if (object) {
    try {
      const result = JSON.parse(object);
      return result;
    } catch {
      return [];
    }
  }
  return [];
};

export const clear = async () => {
  await AsyncStorage.clear();
  return true;
};

export const deleteItem = async item_key => {
  await AsyncStorage.removeItem(Config.storeName + String(item_key));
  return true;
};

export const setItem = async (item_key, item_value) => {
  const value = await AsyncStorage.setItem(
    Config.storeName + item_key,
    String(item_value),
  );
  return value;
};

export const setObject = async (item_key, item_value) => {
  if (typeof item_value == 'object') {
    item_value = JSON.stringify(item_value);
  }

  const value = await AsyncStorage.setItem(
    Config.storeName + item_key,
    item_value,
  );
  return value;
};

export const getItem = async item_key => {
  let item = await AsyncStorage.getItem(Config.storeName + item_key);
  if (!item || item === 'null' || item === 'undefined' || item === undefined) {
    return false;
  } else if (item === 'true') {
    return true;
  } else {
    return String(item);
  }
};

const StorageHelper = {
  getItem,
  getObject,
  clear,
  deleteItem,
  setObject,
  setItem,
};

export default StorageHelper;
