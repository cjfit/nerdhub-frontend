/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Block, GalioProvider, Text } from 'galio-framework';
import argonTheme from './constants/argonTheme';
import { enableScreens } from 'react-native-screens';
import SplashScreen from 'react-native-splash-screen';
import Screens from './navigation/Screens';
import Amplify from 'aws-amplify'
import config from './aws-exports'
import ApolloClient from 'apollo-boost';
import Auth from './src/nav/auth/Auth'
import Initializing from './src/nav/Initializing'
import { Auth as AmplifyAuth } from 'aws-amplify'

// Hasura graphql API server end point object
const client = new ApolloClient({
  uri: 'http://ec2-13-59-107-152.us-east-2.compute.amazonaws.com/v1/graphql',
});

// Configure amplify
Amplify.configure(config)

// Enable native navigation interaction
enableScreens();

class App extends React.Component {
// AWS Auth
state = {
  currentView: 'auth'
}
componentDidMount() {
  this.checkAuth()
}
updateAuth = (currentView) => {
  this.setState({ currentView })
}
checkAuth = async () => {
  try {
    await AmplifyAuth.currentAuthenticatedUser()
    console.log('user is signed in')
    this.setState({ currentView: 'mainNav' })
  } catch (err) {
    console.log('user is not signed in')
    this.setState({ currentView: 'auth' })
  }
}

// Splash Screen
  async componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    // Set current view for authenticated or not authenticated users
    const { currentView } = this.state
    console.log('currentView: ', currentView)

    return (
      <NavigationContainer>
          <GalioProvider style={argonTheme}>
            <Block flex>
            <>
              { currentView === 'initializing' && <Initializing />}
              { currentView === 'auth' && <Auth updateAuth={this.updateAuth} />}
              { currentView === 'mainNav' && <Screens updateAuth={this.updateAuth} />}
            </>
            </Block>
          </GalioProvider>
      </NavigationContainer>
    );
  }
};

export default App;
