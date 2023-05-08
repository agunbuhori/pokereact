import RootStackParamList from '@app/types/RootStackParamList';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';

const useNavigationTitle = (title: string) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  useEffect(() => {
    navigation.setOptions({
      title,
    });
  }, [title]);
};

export default useNavigationTitle;
