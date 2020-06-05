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

Amplify.configure(config)
copy

enableScreens();

class App extends React.Component {
  async componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <NavigationContainer>
          <GalioProvider style={argonTheme}>
            <Block flex>
              <Screens/>
            </Block>
          </GalioProvider>
      </NavigationContainer>
    );
  }
};

export default App;
