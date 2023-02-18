import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  card: {
    margin: 10,
  },
  card_body: {
    flex: 1,
    height: 150,
    alignSelf: 'stretch',
  },
  card_Image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    position: 'relative',
    minHeight: '100%',
    borderRadius: 10,
  },
  card_scroll: {
    width: '100%',
    minheight: '25%',
    position: 'absolute',
    backgroundColor: 'black',
    opacity: 0.7,
    bottom: 0,
    right: 0,
  },
  card_title: {
    textAlign: 'right',
    fontSize: 25,
    color: 'white',
  },
});
