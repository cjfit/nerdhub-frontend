import React, { Component } from 'react'
import { View, TouchableHighlight, StyleSheet } from 'react-native'
import { Text } from 'galio-framework';
import { Auth } from 'aws-amplify'
import argonTheme from '../../constants/argonTheme';
import Input from '../../components/Input'
import ActionButton from '../../components/ActionButton'
import SocialButton from '../../components/SocialButton';

class SignIn extends Component {
  state = {
    username: '',
    password: '',
  }
  onChangeText = (key, value) => {
    this.setState({ [key]: value })
  }
  signIn = async () => {
    const { username, password } = this.state
    try {
      await Auth.signIn(username, password)
      console.log('successfully signed in')
      this.props.updateAuth('MainNav')
    } catch (err) {
      console.log('error signing in...', err)
      alert(err)
    }
  }
  showForgotPassword = () => {
    this.props.toggleAuthType('showForgotPassword')
  }
  render() {
    return (
      <View>
        <Input
          onChangeText={this.onChangeText}
          type='username'
          placeholder='Username'
        />
        <Input
          onChangeText={this.onChangeText}
          type='password'
          placeholder='Password'
          secureTextEntry
        />
        <ActionButton
          title='Sign In'
          onPress={this.signIn}
          BGColor={argonTheme.COLORS.ACTIVE}
        />
        <View style={styles.buttonContainer}>
          <TouchableHighlight onPress={this.showForgotPassword}>
            <Text style={{fontSize: 16, fontFamily: 'OpenSans-regular'}}>Forget your password?</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.buttonContainer}>
            <Text style={{fontSize: 16, fontFamily: 'OpenSans-regular'}}>Or</Text>
        </View>
        <View style={styles.socialCont}>
        <SocialButton
          title="Sign in with Google"
          onPress={() => Auth.federatedSignIn({ provider: "Google" })}
          BGColor={argonTheme.COLORS.MUTED}
          iconName='google'
          iconColor='red'
        />
        <SocialButton
          title="Sign in with Facebook"
          onPress={() => Auth.federatedSignIn({ provider: "Facebook" })}
          BGColor={argonTheme.COLORS.FACEBOOK}
          iconName='facebook'
          iconColor='white'
        />
        <SocialButton
          title="Sign in with Apple"
          BGColor={argonTheme.COLORS.BLACK}
          iconName='apple'
          iconColor='white'
        />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingTop: 15,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  
  socialCont: {
    marginTop: '10%'
  },
})

export default SignIn