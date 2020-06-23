import React from 'react'
import {
  TouchableHighlight, Text, View, StyleSheet, Image
} from 'react-native'
import argonTheme from '../../constants/argonTheme';
import Icon from '../Icon';
import { TouchableOpacity } from 'react-native-gesture-handler';


const GoogleButton = ({
    onPress, title,
}) => {
  
  return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: argonTheme.COLORS.WHITE, 
          marginBottom: '3%', 
          borderRadius: 10,
          shadowColor: argonTheme.COLORS.BLACK,
          shadowOffset: { width: 3, height: 5},
          shadowOpacity: 0.3
        }}
      >
        <View style={styles.button}>
          <Image
          source={require('../../assets/imgs/google-favicon-logo.png')}
          style={styles.google}
          />
          <Text style={{
            color: argonTheme.COLORS.MUTED,
            fontSize: 16,
            fontFamily: 'OpenSans-bold',
            paddingLeft: '2%'
          }}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  button: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  google: {
      width: 25,
      height: 25,
  }
})

export default GoogleButton;