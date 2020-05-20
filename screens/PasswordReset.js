import React, { Component } from 'react';
import { StyleSheet, TextInput, Alert, ActivityIndicator, Image, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements'
import { Block, Text } from 'galio-framework';
import auth from '@react-native-firebase/auth';
import argonTheme from '../constants/argonTheme';
import Images from "../constants/Images";

export default class PasswordReset extends React.Component {
    constructor() {
        super();
        this.state = { 
          email: '', 
          isLoading: false,
          errorCode: ''
        }
    }
    
    updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    passwordReset() {
    if(this.state.email === '') {
      Alert.alert('No email address entered!')
        } else {
            this.setState({
              isLoading: true
            })
        auth()
        .sendPasswordResetEmail(this.state.email)
        .then((res) => {
        console.log(res)
        console.log('Password reset link sent.')
        this.setState({
          isLoading: false,
          email: ''
        })
        this.props.navigation.navigate('SignInEmail')
      })
        .catch(function(error) {
            var errorCode = error.code
            var errorMessage = 'Password reset link did not send, please try again.';
            switch (errorCode) {
              case 'auth/invalid-email':
                alert('Invalid email.');
              case 'auth/user-disabled':
                alert('User disabled.')
              default: 
              alert(errorMessage)
            }
            console.error(error);
          })
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
        <Text style={styles.header}>Reset Password</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          placeholderTextColor={argonTheme.COLORS.WHITE}
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
          autoCapitalize='none'
          keyboardType='email-address'
        />
        <Button
          color={argonTheme.COLORS.WHITE}
          title="Send Reset Link"
          titleStyle={{fontFamily: 'OpenSans-bold', color: argonTheme.COLORS.WHITE}}
          type='solid'
          buttonStyle={{
            backgroundColor: argonTheme.COLORS.ACTIVE,
            width: '100%',
            marginTop: '15%'
        }}
          onPress={() => this.passwordReset()}
        />                   
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
    preloader: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff'
    },
    header: {
        fontFamily: 'OpenSans-regular',
        fontSize: 24,
        color: argonTheme.COLORS.WHITE,
        marginBottom: '8%',
        textShadowColor: argonTheme.COLORS.BLACK,
        textShadowOffset: { width: -1, height: 2 },
        textShadowRadius: 3, 
    }
  });