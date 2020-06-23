import React from 'react'
import { View, StyleSheet, Image, ActivityIndicator } from 'react-native'
import argonTheme from '../constants/argonTheme';
import Images from '../constants/Images';

class SignIn extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator
        size='large'
        color={argonTheme.COLORS.ACTIVE}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default SignIn