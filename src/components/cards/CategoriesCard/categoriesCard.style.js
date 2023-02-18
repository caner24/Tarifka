import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  card: {
    padding: 20,
    margin: 10,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: 'white',
  },
  card_body: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  card_Image: {
    borderRadius: 50,
    flex: 1 / 3,
    width: Dimensions.get('window').width / 10,
    height: Dimensions.get('window').height / 11,
    resizeMode: 'stretch',
  },
  card_title: {
    flex: 1 / 2,
    fontSize: 20,
    color: 'black',
  },
});
