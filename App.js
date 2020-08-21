/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Block } from 'galio-framework';
import { enableScreens } from 'react-native-screens';
import SplashScreen from 'react-native-splash-screen';
import Screens from './navigation/Screens';
import Amplify, { Auth } from 'aws-amplify'
import config from './aws-exports'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

// Used for dev, set the level of detail for console output
Amplify.Logger.LOG_LEVEL = 'INFO';

// Configure amplify
Amplify.configure(config)

// Enable native navigation interaction
enableScreens();

// Main App Component
function App() {

  // Hide the splash screen
  useEffect(() => {
    SplashScreen.hide();
  });

  // Initialize JWT token
  const [JWTToken, setJWTToken] = useState('')

  // Retreiving Cognito ID token
  Auth.currentSession()
      .then(data => setJWTToken(data.getIdToken().getJwtToken()))
      .catch(err => console.log(err));

  // AWS RDS postgres database endpoint
  const postGresURI = 'http://ec2-13-59-107-152.us-east-2.compute.amazonaws.com/v1/graphql';

  // Creating Hasura graphql API server object with postgres endpoint
  const client = new ApolloClient({
    uri: postGresURI,
    headers: {'Authorization': 'Bearer ' + JWTToken},
    cache: new InMemoryCache()
  });

    return (
      
      <NavigationContainer>
        <Block flex>
          <ApolloProvider client={client}>
            <Screens/>
          </ApolloProvider>
        </Block>
      </NavigationContainer>
      
    );
  
};

export default App;
