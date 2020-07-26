import React, { Component, useState, useContext } from 'react'
import {AuthContext} from '../../navigation/Screens';
import {ToggleContext} from './Auth';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { Text } from 'galio-framework';
import { Auth } from 'aws-amplify'
import argonTheme from '../../constants/argonTheme';
import Input from '../../components/Auth/Input'
import ActionButton from '../../components/Auth/ActionButton'
import SocialButton from '../../components/Auth/SocialButton';
import GoogleButton from '../../components/Auth/GoogleButton';


// Sign in screen
function SignIn() {
  // Assigns updateAuth function to a variable
  // Assigns toggleAuthType function to a variable
  const updateAuth = useContext(AuthContext);
  const toggleAuthType = useContext(ToggleContext);

  // Username and Password state management via useState hooks
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  // Sign In function
  // Attempts to sign in with given username and password 
  // * Note that Auth.signIn returns a promise in the form of an object
  // Sets current view to the main app if the Auth.signIn promise resolves to a success
  // Logs error and alerts if the Auth.Sign promise resolves to a failure
  async function signIn() {
    try {
      await Auth.signIn(username, password)
      console.log('successfully signed in')
      updateAuth('MainNav')
    } catch (code) {
      console.log('error signing in...', code)
      alert(code.message)
    }
  }

  function showForgotPassword() {
    toggleAuthType('showForgotPassword')
  }

    return (
      <View>
        <Input
          onChangeText={(text) => {setUsername(text)}}
          type='username'
          placeholder='Username'
        />
        <Input
          onChangeText={(text) => {setPassword(text)}}
          type='password'
          placeholder='Password'
          secureTextEntry
        />
        <ActionButton
          title='Sign In'
          onPress={signIn}
          BGColor={argonTheme.COLORS.ACTIVE}
        />
        <View style={styles.buttonContainer}>
          <TouchableWithoutFeedback onPress={showForgotPassword}>
            <Text style={{fontSize: 16, fontFamily: 'OpenSans-regular'}}>Forget your password?</Text>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.buttonContainer}>
            <Text style={{fontSize: 16, fontFamily: 'OpenSans-regular'}}>Or</Text>
        </View>
        <View style={styles.socialCont}>
        <GoogleButton
          title="Sign in with Google"
          onPress={() => Auth.federatedSignIn({ provider: "Google" })}
        />
        <SocialButton
          title="Sign in with Facebook"
          onPress={() => Auth.federatedSignIn({ provider: "Facebook" })}
          BGColor={argonTheme.COLORS.FACEBOOK}
          iconName='facebook'
          iconColor='white'
          textColor={argonTheme.COLORS.WHITE}
        />
        <SocialButton
          title="Sign in with Apple"
          BGColor={argonTheme.COLORS.BLACK}
          iconName='apple'
          iconColor='white'
          textColor={argonTheme.COLORS.WHITE}
        />
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingTop: '2%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  
  socialCont: {
    marginTop: '5%'
  },
})

export default SignIn