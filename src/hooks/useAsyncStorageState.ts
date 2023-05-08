import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useAsyncStorageState = <T = any>(
  key: string,
  defaultValue: T,
): [T, (value: T) => Promise<void>, any] => {
  const [state, setState] = useState<T>(defaultValue);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
          setState(JSON.parse(value));
        }
      } catch (error) {
        console.error('Error retrieving data from AsyncStorage:', error);
      }
    };

    fetchData();
  }, [key]);

  const setValue = async (value: T) => {
    try {
      setState(value);
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error setting data in AsyncStorage:', error);
    }
  };

  const removeValue = async () => {
    try {
      setState(defaultValue);
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing data from AsyncStorage:', error);
    }
  };

  return [state, setValue, removeValue];
};

export default useAsyncStorageState;
