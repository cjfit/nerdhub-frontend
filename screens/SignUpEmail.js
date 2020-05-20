
import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    Alert, 
    ActivityIndicator,
    Image, 
    ImageBackground } from 'react-native';
import auth from '@react-native-firebase/auth';
import argonTheme from '../constants/argonTheme';
import Images from "../constants/Images";
import { Button } from 'react-native-elements'
import { Block } from 'galio-framework';
import Icon from '../components/Icon';
import { color } from 'react-native-reanimated';

export default class SignupEmail extends Component {
  
  constructor() {
    super();
    this.state = { 
      displayName: '',
      email: '', 
      password: '',
      reEntry: '',
      isLoading: false,
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  registerUser = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to sign up!')
    } else if(this.state.password !== this.state.reEntry) {
      alert('Passwords do not match.')
    } else {
      this.setState({
        isLoading: true,
      })
      auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        res.user.updateProfile({
          displayName: this.state.displayName
        })
        console.log('User registered successfully!')
        this.setState({
          isLoading: false,
          displayName: '',
          email: '', 
          password: '',
          reEntry: ''
        })
        this.props.navigation.navigate('Feed');
      })
      .catch(function(error) {
        var errorCode = error.code
        var errorMessage = 'Something went wrong while registering';
        switch (errorCode) {
          case 'auth/email-already-in-use':
            alert('Email already in use.');
          case 'auth/invalid-email':
            alert('Invalid email.');
          case 'auth/weak-password':
            alert('Password is too weak.')
          default: 
          alert(errorMessage)
        }
        console.error(error);
      }).then((errorCode) => {
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
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color={argonTheme.COLORS.ACTIVE}/>
        </View>
      )
    }    
    return (
    <ImageBackground source={Images.Onboarding} style={styles.background}>
        <Image source={Images.OnboardingLogo} style={styles.img}/>
        <Block style={styles.inputCont}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Username"
          placeholderTextColor={argonTheme.COLORS.WHITE}
          value={this.state.displayName}
          onChangeText={(val) => this.updateInputVal(val, 'displayName')}
          maxLength={15}
          autoCapitalize='none'
          keyboardType='default'
          autoCorrect={false}
          textContentType='nickname'
        />      
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          placeholderTextColor={argonTheme.COLORS.WHITE}
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
          autoCapitalize='none'
          keyboardType='email-address'
          autoCorrect={false}
          textContentType='emailAddress'
          
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
          autoCorrect={false}
          //textContentType='newPassword'
        />   
        <TextInput
          style={{
            marginBottom: 0,
            width: '80%',
            paddingBottom: 15,
            alignSelf: "center",
            borderColor: argonTheme.COLORS.WHITE,
            borderBottomWidth: 2,
            color: argonTheme.COLORS.WHITE
          }}
          placeholder="Re-enter password"
          placeholderTextColor={argonTheme.COLORS.WHITE}
          value={this.state.reEntry}
          onChangeText={(val) => this.updateInputVal(val, 'reEntry')}
          maxLength={15}
          secureTextEntry={true}
          autoCapitalize='none'
          keyboardType='default'
          autoCorrect={false}
          //textContentType='newPassword'
        />   
        </Block>
        <Button 
        title='Submit' 
        type='solid'
        containerStyle={{marginBottom: '5%', marginTop: '10%'}}
        buttonStyle={{backgroundColor: argonTheme.COLORS.ACTIVE}}
        titleStyle={{fontFamily: 'OpenSans-bold', fontSize: 18, color: argonTheme.COLORS.WHITE}}
        icon={
          <Icon
          name='check'
          family='antdesign'
          size={25}
          color={argonTheme.COLORS.WHITE}
          />
        }
        onPress={() => this.registerUser()}
        />
        <Text style={styles.loginText}>
          or
        </Text>
        <Block style={styles.buttonCont}>
            <Block style={styles.button}>
                <Button 
                title="Sign in with Google"
                titleStyle={{fontFamily: 'OpenSans-bold', color: argonTheme.COLORS.TEXT, paddingLeft: '9%'}}
                type='solid'
                raised
                buttonStyle={{
                    backgroundColor: argonTheme.COLORS.WHITE,
                    width: '100%'
                }}
                icon={
                    <Icon
                    name='google'
                    family='antdesign'
                    size={25}
                    />
                }
                onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
                />
            </Block>
            <Block style={styles.button}>
                <Button 
                title="Sign in with Apple"
                titleStyle={{fontFamily: 'OpenSans-bold', color: argonTheme.COLORS.WHITE, paddingLeft: '12.5%'}}
                type='solid'
                raised
                buttonStyle={{
                    backgroundColor: argonTheme.COLORS.BLACK,
                    width: '100%'
                }}
                icon={
                    <Icon
                    name='apple1'
                    family='antdesign'
                    size={25}
                    color={argonTheme.COLORS.WHITE}
                    />
                }
                />
            </Block>
        </Block>

        <Text 
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('SignInEmail')}>
          Already Registered? Click here to login
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
  inputCont: {
   width: '100%',
   marginBottom: 0
  },
  loginText: {
    color: argonTheme.COLORS.WHITE,
    textAlign: 'center',
    fontFamily: 'OpenSans-bold',
    fontSize: 16,
    textShadowColor: argonTheme.COLORS.BLACK,
    textShadowOffset: { width: -1, height: 2 },
    textShadowRadius: 3, 
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
  buttonCont: {
    padding: '5%',
    borderRadius: 8
  },
  button: {
    marginBottom: '3%'
  },
});