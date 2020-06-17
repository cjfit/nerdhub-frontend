import React, {useState} from 'react'
import { Dimensions, StyleSheet, TextInput } from 'react-native'
import argonTheme from '../../constants/argonTheme'

const { width } = Dimensions.get('window')

const Input = ({
  placeholder, type, secureTextEntry = false, onChangeText
}) => (
  <TextInput
    style={styles.input}
    placeholder={placeholder}
    autoCapitalize='none'
    autoCorrect={false}
    onChangeText={v => onChangeText(type, v)}
    secureTextEntry={secureTextEntry}
    placeholderTextColor={argonTheme.COLORS.TEXT}
    selectionColor={argonTheme.COLORS.ACTIVE}
  />
)

const styles = StyleSheet.create({
  input: {
    backgroundColor: argonTheme.COLORS.WHITE,
    borderColor: argonTheme.COLORS.ACTIVE,
    borderRadius: 10,
    borderWidth: 1,
    height: 45,
    width: width - 30,
    marginBottom: 10,
    fontSize: 16,
    paddingHorizontal: 14,
    fontFamily: 'OpenSans-regular',
    color: argonTheme.COLORS.TEXT
  }
})

export default Input