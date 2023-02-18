import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
} from 'react-native';
import {API_URL} from '@env';
import useFetch from '../../hooks/useFetch/useFetch';
import LottieView from 'lottie-react-native';
import styleSheet from './categories.style';
import CategoriesCard from '../../components/cards/CategoriesCard/CategoriesCard';
export default function Categories({navigation}) {
  const [data, loading, error] = useFetch(API_URL + '/categories.php');
  if (loading) {
    return (
      <LottieView
        source={require('../../assets/loading/loading.json')}
        autoPlay
      />
    );
  }
  if (error) {
    return <Text>{error}</Text>;
  }

  const renderItem = ({item}) => (
    <CategoriesCard renderCategories={item} navigatePage={navigation} />
  );

  return (
    <SafeAreaView>
      <FlatList
        style={styleSheet.bgOrange}
        data={data.categories}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}
