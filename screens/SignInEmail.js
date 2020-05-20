import React, { Component } from 'react';
import { StyleSheet, TextInput, Alert, ActivityIndicator, Image, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements'
import { Block, Text } from 'galio-framework';
import auth from '@react-native-firebase/auth';
import argonTheme from '../constants/argonTheme';
import Images from "../constants/Images";

export default class SignInEmail extends Component {
  
  constructor() {
    super();
    this.state = { 
      email: '', 
      password: '',
      reEntry: '',
      isLoading: false,
      errorCode: ''
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  userLogin = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signin!')
    } else {
      this.setState({
        isLoading: true,
      })
      auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        console.log(res)
        console.log('User logged-in successfully!')
        this.setState({
          isLoading: false,
          email: '', 
          password: '',

        })
        this.props.navigation.navigate('Feed')
      })
      .catch(function(error) {
        var errorCode = error.code
        var errorMessage = 'Something went wrong while registering';
        switch (errorCode) {
          case 'auth/user-not-found':
            alert('User not found.');
          case 'auth/invalid-email':
            alert('Invalid email.');
          case 'auth/user-disabled':
            alert('User disabled.')
          case 'auth/wrong-password':
            alert('Password does not match email.')
          default: 
          alert(errorMessage)
        }
        console.error(error);
      }).then(function(errorCode) {
        if(errorCode !== '') {
          this.setState({
            isLoading: false
          })
        }
      });
    }
  }

  render() {
    if(this.state.isLoading){
      return(
        <Block style={styles.preloader}>
          <ActivityIndicator size="large" color={argonTheme.COLORS.ACTIVE}/>
        </Block>
      )
    }    
    return (
      <ImageBackground source={Images.Onboarding} style={styles.background}>
        <Image source={Images.OnboardingLogo} style={styles.img}/>
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          placeholderTextColor={argonTheme.COLORS.WHITE}
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
          autoCapitalize='none'
          keyboardType='email-address'
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          placeholderTextColor={argonTheme.COLORS.WHITE}
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
          autoCapitalize='none'
          keyboardType='default'
        />
        <Button
          color={argonTheme.COLORS.WHITE}
          title="Log In"
          titleStyle={{fontFamily: 'OpenSans-bold', color: argonTheme.COLORS.WHITE}}
          type='solid'
          buttonStyle={{
            backgroundColor: argonTheme.COLORS.ACTIVE,
            width: '100%',
            marginTop: '15%'
        }}
          onPress={() => this.userLogin()}
        />
       <Text 
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('PasswordReset')}>
          Forgot password?
        </Text>                                          
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  img: {
    width: '90%',
    height: 100,
    marginBottom: '15%',
    marginTop: '35%'
  },
  inputStyle: {
    width: '80%',
    marginBottom: 35,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: argonTheme.COLORS.WHITE,
    borderBottomWidth: 2,
    color: argonTheme.COLORS.WHITE
  },
  loginText: {
    color: argonTheme.COLORS.WHITE,
    marginTop: 25,
    textAlign: 'center',
    fontFamily: 'OpenSans-bold',
    textShadowColor: argonTheme.COLORS.BLACK,
    textShadowOffset: { width: -1, height: 2 },
    textShadowRadius: 3, 
    fontSize: 16
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});