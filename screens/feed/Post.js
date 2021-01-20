import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  ImageBackground,
  Dimensions,
} from 'react-native';
import argonTheme from '../../constants/argonTheme';
import Icon from '../../components/Icon';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Post({route}) {
  //params name not consistent - fix later
  var postimg = null;

  if (route.params.item.articlefullimgurl == 'NULL') {
    postimg = '/assets/imgs/grey.jpg';
  } else postimg = route.params.item.articlefullimgurl;

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          height: windowHeight,
        }}>
        <ImageBackground
          source={{uri: postimg}}
          style={styles.image}></ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  image: {
    width: windowWidth,
    height: windowHeight * 0.5,
    resizeMode: 'cover',
  },
});
