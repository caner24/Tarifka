import React from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import styleSheet from './mealscard.style';
export default function MealsCard({renderCategories, navigatePage}) {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigatePage.navigate('MealDetail', renderCategories.idMeal);
      }}>
      <View style={styleSheet.card}>
        <View style={styleSheet.card_body}>
          <Image
            style={styleSheet.card_Image}
            source={{uri: renderCategories.strMealThumb}}
          />
          <ScrollView style={styleSheet.card_scroll}>
            <Text style={styleSheet.card_title}>
              {renderCategories.strMeal}
            </Text>
          </ScrollView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
