import React, {useState, useEffect, useContext} from 'react'
import {
  View, Text, StyleSheet, Image, Dimensions, Platform
} from 'react-native'
import {AuthContext} from '../../navigation/Screens';
import SignIn from './SignIn'
import SignUp from './SignUp'
import ForgotPassword from './ForgotPassword'
import Images from '../../constants/Images';
import argonTheme from '../../constants/argonTheme';

// Get width of screen
const { width } = Dimensions.get('window')

// Create context for toggleAuthType function
export const ToggleContext = React.createContext();

// Auth Screens parent component
function Auth() {

// Assign updateAuth function from AuthContext to a variable
  const updateAuth = useContext(AuthContext);

  // FormType state management via useState hook
  const [formType, setFormType] = useState('showSignIn');

    // Sets form type
    function toggleAuthType(formType) {
      setFormType(formType);
    }

      const showSignIn = formType === 'showSignIn'
      const showSignUp = formType === 'showSignUp'
      const showForgotPassword = formType === 'showForgotPassword'
      
      return (
        <ToggleContext.Provider value={toggleAuthType}>
        <View
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
                toggleAuthType={toggleAuthType}
                updateAuth={() => updateAuth('mainNav')}
              />
            ) }
            { showSignUp && <SignUp toggleAuthType={toggleAuthType} /> }
            { showForgotPassword && <ForgotPassword toggleAuthType={toggleAuthType} /> }
            <View style={{ position: 'absolute', bottom: 40 }}>
              {
                showSignUp || showForgotPassword ? (
                  <Text style={styles.bottomMessage}>Already signed up? <Text
                  style={styles.bottomMessageHighlight}
                  onPress={() => toggleAuthType('showSignIn')}>&nbsp;&nbsp;Sign In</Text></Text>
                ) : (
                  <Text style={styles.bottomMessage}>Need an account?
                    <Text
                      onPress={() => toggleAuthType('showSignUp')}
                      style={styles.bottomMessageHighlight}>&nbsp;&nbsp;Sign Up</Text>
                  </Text>
                )
              }
            </View>
        </View>
        </ToggleContext.Provider>
      )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: argonTheme.COLORS.OFF_WHITE_BACKGROUND,
    width: '100%'
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