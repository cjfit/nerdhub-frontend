import React from 'react'
import {
  TouchableHighlight, Text, View, StyleSheet
} from 'react-native'
import argonTheme from '../../constants/argonTheme';
import Icon from '../Icon';
import { TouchableOpacity } from 'react-native-gesture-handler';


const SocialButton = ({
  onPress, title, BGColor, iconName, iconColor, textColor
}) => {
  
  return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: BGColor, 
          marginBottom: '3%', 
          borderRadius: 10,
          shadowColor: argonTheme.COLORS.BLACK,
          shadowOffset: { width: 3, height: 5},
          shadowOpacity: 0.3
        }}
      >
        <View style={styles.button}>
          <Icon
          name={iconName}
          family='font-awesome'
          size={20}
          color={iconColor}
          />
          <Text style={{
            color: textColor,
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
  }
})

export default SocialButton;