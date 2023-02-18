import React from 'react';
import {SafeAreaView, Text, FlatList} from 'react-native';
import {API_URL} from '@env';
import useFetch from '../../hooks/useFetch/useFetch';
import LottieView from 'lottie-react-native';
import styleSheet from '../Meals/meals.style';
import MealsCard from '../../components/cards/MealDetailsCard/MealsDetailsCard';

export default function Meals({navigation, route}) {
  const [data, loading, error] = useFetch(
    `${API_URL}/lookup.php?i=${route.params}`,
  );
  console.log(data);
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
    <MealsCard renderCategories={item} navigatePage={navigation} />
  );

  return (
    <SafeAreaView>
      <FlatList
        style={styleSheet.bgOrange}
        data={data.meals}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}
