import React, {useCallback} from 'react';
import {Text, View, Image, Linking, Button, Alert} from 'react-native';
import styleSheet from './mealsDetails.style';
export default function MealsCard({renderCategories, navigatePage}) {
  const supportedURL = renderCategories.strYoutube;

  const OpenURLButton = ({url}) => {
    const handlePress = useCallback(async () => {
      await Linking.openURL(url);
    }, [url]);
    return <Button title="Watch on youtube" onPress={handlePress} />;
  };
  return (
    <View style={styleSheet.card}>
      <View style={styleSheet.card_body}>
        <Image
          style={styleSheet.card_Image}
          source={{uri: renderCategories.strMealThumb}}
        />
        <Text style={styleSheet.card_title}>{renderCategories.strMeal}</Text>
        <Text style={styleSheet.card_title2}>{renderCategories.strArea}</Text>
      </View>
      <View style={styleSheet.horizantalHr}></View>
      <View>
        <Text style={styleSheet.title_body}>
          {renderCategories.strInstructions}
        </Text>
      </View>
      <View style={styleSheet.footer_button}>
        <OpenURLButton url={supportedURL}></OpenURLButton>
      </View>
    </View>
  );
}
