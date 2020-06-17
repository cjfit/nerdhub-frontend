import React from 'react'
import {
  View, Text, StyleSheet, Image, Dimensions, KeyboardAvoidingView, Platform
} from 'react-native'

import SignIn from './SignIn'
import SignUp from './SignUp'
import ForgotPassword from './ForgotPassword'
import Images from '../../../constants/Images';
import argonTheme from '../../../constants/argonTheme'

const { width } = Dimensions.get('window')

class Auth extends React.Component {
  state = {
    showSignUp: false,
    formType: 'showSignIn'
  }
  toggleAuthType = formType => {
    this.setState({ formType })
  }
  render() {
    const showSignIn = this.state.formType === 'showSignIn'
    const showSignUp = this.state.formType === 'showSignUp'
    const showForgotPassword = this.state.formType === 'showForgotPassword'
    return (
      <KeyboardAvoidingView
      style={styles.container}
        behavior={Platform.Os == "ios" ? "padding" : "height"}
      >
          <Image
            style={styles.logo}
            resizeMode='contain'
            source={Images.DrawerLogo2}
          />
          { showSignIn && (
            <SignIn
              toggleAuthType={this.toggleAuthType}
              updateAuth={() => this.props.updateAuth('mainNav')}
            />
          ) }
          { showSignUp && <SignUp toggleAuthType={this.toggleAuthType} /> }
          { showForgotPassword && <ForgotPassword toggleAuthType={this.toggleAuthType} /> }
          <View style={{ position: 'absolute', bottom: 40 }}>
            {
              showSignUp || showForgotPassword ? (
                <Text style={styles.bottomMessage}>Already signed up? <Text
                style={styles.bottomMessageHighlight}
                onPress={() => this.toggleAuthType('showSignIn')}>&nbsp;&nbsp;Sign In</Text></Text>
              ) : (
                <Text style={styles.bottomMessage}>Need an account?
                  <Text
                    onPress={() => this.toggleAuthType('showSignUp')}
                    style={styles.bottomMessageHighlight}>&nbsp;&nbsp;Sign Up</Text>
                </Text>
              )
            }
          </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40,
    backgroundColor: argonTheme.COLORS.OFF_WHITE_BACKGROUND
  },  
  logo: {
    height: width / 3.3,
    marginBottom: '5%',
    position: 'relative',
    zIndex: 1
  },
  title: {
    fontSize: 26,
    marginTop: 15,
    fontFamily: 'OpenSans-bold',
    color: '#e19f51'
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 20,
    color: 'rgba(0, 0, 0, .75)',
    fontFamily: 'OpenSans-regular',
  },
  bottomMessage: {
    fontFamily: 'OpenSans-regular',
    fontSize: 16
  },
  bottomMessageHighlight: {
    color: argonTheme.COLORS.ACTIVE,
    paddingLeft: 10
  }
})

export default Auth