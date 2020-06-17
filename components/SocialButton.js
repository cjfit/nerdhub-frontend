import React from 'react'
import {
  TouchableHighlight, Text, View, StyleSheet
} from 'react-native'
import argonTheme from '../constants/argonTheme'
import Icon from './Icon';


const SocialButton = ({
  onPress, title, BGColor, iconName, iconColor
}) => {
  
  return (
      <TouchableHighlight
        onPress={onPress}
        style={{backgroundColor: BGColor, marginBottom: '3%', borderRadius: 10}}
      >
        <View style={styles.button}>
          <Icon
          name={iconName}
          family='font-awesome'
          size={20}
          color={iconColor}
          />
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </TouchableHighlight>
  )
}


const styles = StyleSheet.create({
  button: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  buttonText: {
    color: argonTheme.COLORS.WHITE,
    fontSize: 16,
    fontFamily: 'OpenSans-bold',
    paddingLeft: '2%'
  }
})

export default SocialButton;