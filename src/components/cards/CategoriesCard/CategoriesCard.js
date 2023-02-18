import React from 'react';
import {Text, View, TouchableWithoutFeedback, Image} from 'react-native';

import styleSheet from './categoriesCard.style';
export default function CategoriesCard({renderCategories, navigatePage}) {
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigatePage.navigate('MealsPage', renderCategories.strCategory)
      }>
      <View style={styleSheet.card}>
        <View style={styleSheet.card_body}>
          <Image
            style={styleSheet.card_Image}
            source={{uri: renderCategories.strCategoryThumb}}
          />
          <Text style={styleSheet.card_title}>
            {renderCategories.strCategory}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
