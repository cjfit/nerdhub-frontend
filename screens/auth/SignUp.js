import React, { Fragment, Component } from 'react'
import {KeyboardAvoidingView, StyleSheet } from 'react-native'
import ActionButton from '../../components/Auth/ActionButton'
import Input from '../../components/Auth/Input'
import { Auth } from 'aws-amplify'
import argonTheme from '../../constants/argonTheme'

class SignIn extends Component {
  state = {
    username: '',
    password: '',
    email: '',
    phone_number: '',
    authCode: '',
    stage: 0
  }
  onChangeText = (key, value) => {
    this.setState({ [key]: value })
  }
  signUp = async () => {
    const {
      username, password, email
    } = this.state
    try {
      await Auth.signUp({ username, password, attributes: { email }})
      console.log('successful sign up..')
      this.setState({ stage: 1 })
    } catch (code) {
      console.log('error signing up...', code)
      alert(code.message)
    }
  
}
  confirmSignUp = async () => {
    const { username, authCode } = this.state
    try {
      await Auth.confirmSignUp(username, authCode)
      this.props.toggleAuthType('showSignIn')
    } catch (err) {
      console.log('error signing up...', err)
    }
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        {
          this.state.stage === Number(0) && (
            <Fragment>
              <Input
                placeholder='Username'
                type='username'
                onChangeText={this.onChangeText}
              />
              <Input
                placeholder='Email'
                type='email'
                onChangeText={this.onChangeText}
              />
              <Input
                placeholder='Password'
                type='password'
                onChangeText={this.onChangeText}
                secureTextEntry
              />
              <Input
                placeholder='Phone Number'
                type='phone_number'
                onChangeText={this.onChangeText}
              /> 
              <ActionButton
                title='Sign Up'
                onPress={this.signUp}
                BGColor={argonTheme.COLORS.ACTIVE}
              />
            </Fragment>
          )
        }
        {
          this.state.stage === Number(1) && (
            <Fragment>
              <Input
                placeholder='Confirmation Code'
                type='authCode'
                onChangeText={this.onChangeText}
              />
              <ActionButton
                title='Confirm Sign Up'
                onPress={this.confirmSignUp}
              />
            </Fragment>
          )
        }
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  },
  input: {
    backgroundColor: '#fcf3db',
    borderRadius: 30,
    height: 45
  }
})

export default SignIn