import React, {useState} from 'react'
import { Dimensions, StyleSheet, TextInput } from 'react-native'
import argonTheme from '../../constants/argonTheme'

const { width } = Dimensions.get('window')

const Input = ({
  placeholder, secureTextEntry = false, onChangeText
}) => {

  const [focus, setFocus] = useState(styles.input);
  
  return (
    <TextInput
      style={focus}
      placeholder={placeholder}
      autoCapitalize='none'
      autoCorrect={false}
      onChangeText={v => onChangeText(v)}
      secureTextEntry={secureTextEntry}
      placeholderTextColor={argonTheme.COLORS.TEXT}
      selectionColor={argonTheme.COLORS.ACTIVE}
      onFocus={() => setFocus(styles.shadowInput)}
      onBlur={() => setFocus(styles.input)}
    />
)}

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
  },
  shadowInput: {
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
    color: argonTheme.COLORS.TEXT,
    shadowColor: argonTheme.COLORS.ACTIVE,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.6
  }
})

export default Input