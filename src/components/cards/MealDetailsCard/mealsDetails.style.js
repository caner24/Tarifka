import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  card: {
    margin: 10,
  },
  card_body: {
    flex: 1,
    height: 350,
    alignSelf: 'stretch',
  },
  card_title: {
    marginTop: 15,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
  },
  card_title2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  card_Image: {
    width: '100%',
    height: '80%',
    resizeMode: 'stretch',
  },
  horizantalHr: {
    marginTop:5,
    width: '100%',
    height: 1,
    backgroundColor: 'gray',
  },
  title_body:{
fontWeight:'bold',
  },
  footer_button: {
    padding: 10,
    margin: 10,
  },
});
