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
//import config from './aws-exports'
import ApolloClient, {gql} from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

/*
// AWS RDS postgres database endpoint
const postGresURI = 'http://ec2-13-59-107-152.us-east-2.compute.amazonaws.com/v1/graphql';
// Creating Hasura graphql API server object with postgres endpoint
const client = new ApolloClient({
  uri: postGresURI,
  headers: {'Authorization': 'Bearer eyJraWQiOiJ4N0Z4V2tiYTRDaUdQN2ROOHZTdU5TSlpXcHB0OTNrZ25YWTF2RVoralhrPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoibER6SGNTTFBfa2drS19veE13RzJiUSIsInN1YiI6IjNkMGIzNTgwLTUzYWItNDMzYy05NmU1LTFlN2MyYjI1MmUwZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJodHRwczpcL1wvaGFzdXJhLmlvXC9qd3RcL2NsYWltcyI6IntcIngtaGFzdXJhLXVzZXItaWRcIjpcIjNkMGIzNTgwLTUzYWItNDMzYy05NmU1LTFlN2MyYjI1MmUwZVwiLFwieC1oYXN1cmEtZGVmYXVsdC1yb2xlXCI6XCJ1c2VyXCIsXCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzXCI6W1widXNlclwiXX0iLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0yLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMl9jZFQ5Z0pINngiLCJjb2duaXRvOnVzZXJuYW1lIjoiZmxleGhlZGdlIiwiYXVkIjoiYmRjODZzZWdzbG42YnJiOG9lOXBiY2hoZCIsImV2ZW50X2lkIjoiYTU5MzdhYTAtMjc0Ny00OTI0LWJmNjEtOWMyYmZjMDYwZDg4IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE1OTI3Njc4MjQsImV4cCI6MTU5Mjc3MTQyNCwiaWF0IjoxNTkyNzY3ODI0LCJlbWFpbCI6InBhdWxzdXR0b25AbmVyZGh1Yi5pbyJ9.obOyT_6w40Q9cWtHUIsgvvxS67TKfH4kdaJ2Qpex9YSevYI8j0J9_tFm1WW8X6hofw3OxEO1cKC8MSvlIDXkZOf0OY011XJuBwClxYNQgHz3Q2iDPcfNoBOW34OnO_Rfb7WKfB4V0219gJwD4VOyeDr1gXcPzzc8CNOf7Hy9XeUM6ZcJfmHsn5CVNdvGShIo9LfK_qGNvGa_wQEoYsuHrjl02lXaClLaTleUPNbJ9QG1XZvv1PHYIjPnGXWeb4X58cb8bvk6n3iogE9F9jtXw3e4juTpx0-k8djayr5eiHZkmQ9UMM8NeSfktufgnZ9LVq6rc2Otk2-G4Es6nT3TNQ'}
});
// Test query
client
  .query({
    query: gql`
      {
        articles(limit: 20) {
          title
        }
      }
    `
  })
  .then(result => console.log(result));
*/

// Configure amplify
Amplify.configure(config)

// Enable native navigation interaction
enableScreens();

class App extends React.Component {
// AWS Auth

// Splash Screen
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
