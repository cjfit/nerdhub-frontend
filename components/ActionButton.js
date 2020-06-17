import React from 'react'
import {
  TouchableHighlight, Text, View, StyleSheet
} from 'react-native'
import argonTheme from '../constants/argonTheme';


const ActionButton = ({
  onPress, title
}) => {

  return (
      <TouchableHighlight
        onPress={onPress}
        style={{backgroundColor: argonTheme.COLORS.ACTIVE, marginBottom: '3%', borderRadius: 10}}
      >
        <View style={styles.button}>
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

export default ActionButton