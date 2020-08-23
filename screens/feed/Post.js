import React from 'react'
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native'
import argonTheme from '../../constants/argonTheme';

export default function Post() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator
        size='small'
        color={argonTheme.COLORS.ACTIVE}
        />
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  }
})
