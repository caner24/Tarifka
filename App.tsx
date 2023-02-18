import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from './src/pages/Categories/Categories';
import Meals from './src/pages/Meals/Meals';
import MealDetails from './src/pages/MealDetails/MealsDetails';
function App(): JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: 'Categories',
            headerShown: true,
            headerTitleAlign: 'center',
            headerTitleStyle: {color: 'orange'},
          }}
          name="CategoriesPage"
          component={Categories}
        />
        <Stack.Screen
          options={{
            title: 'Meals',
            headerTitleAlign: 'center',
            headerTintColor: 'orange',
            headerTitleStyle: {color: 'orange'},
          }}
          name="MealsPage"
          component={Meals}
        />
           <Stack.Screen
          options={{
            title: 'MealDetail',
            headerTitleAlign: 'center',
            headerTintColor: 'orange',
            headerTitleStyle: {color: 'orange'},
          }}
          name="MealDetail"
          component={MealDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
