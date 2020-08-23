import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import FeedScreens from '../screens/feed/FeedScreens';
import Post from '../screens/feed/Post';
import Explore from "../screens/explore/Explore";
import NerdList from "../screens/NerdList";
import Profile from '../screens/Profile';
import ViewAll from "../screens/ViewAll";
import Settings from "../screens/Settings";
import Icon from "../components/Icon";
import Header from '../components/Header';
import CustomDrawerContent from "../navigation/Menu";
import Search from '../screens/Search';

import Auth from '../screens/auth/Auth';
import Initializing from '../screens/auth/Auth';
import { Auth as AmplifyAuth } from 'aws-amplify'

export const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const { width } = Dimensions.get("screen");

//auth flow at bottom of file

// Feed screens
function FeedTabs() {
  return (
    <Stack.Navigator 
    mode="card" 
    headerMode='screen' 
    initialLayout={{ width: Dimensions.get('window').width }}
    screenOptions={{
      header: ({navigation, scene}) => {
        return (
          <Header
          title='Feed'
          navigation={navigation}
          scene={scene}
          />
        )
      }
    }}
    >
      <Stack.Screen name='FeedScreens' component={FeedScreens}/>
      <Stack.Screen 
      name='Post' 
      component={Post} 
      options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Post"
              navigation={navigation}
              scene={scene}
              back={true}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}/>
    </Stack.Navigator>
  )
}

// Explore Screens
function ExploreStack() {
    return (
      <Stack.Navigator mode="card" headerMode="screen">
        <Stack.Screen
        name="Explore"
        component={Explore}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Explore"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
        />
      </Stack.Navigator>
    )
}

// Nerdlist Screens
function NerdListStack() {
    return (
      <Stack.Navigator mode="card" headerMode="screen">
        <Stack.Screen
        name="NerdList"
        component={NerdList}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="NerdList"
              navigation={navigation}
              scene={scene}
              search={true}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
        />
        <Stack.Screen 
            name="Profile"
            component={Profile}
            options={{
                header: ({ navigation, scene }) => (
                  <Header
                    transparent
                    back
                    title="Profile"
                    navigation={navigation}
                    scene={scene}
                  />
                ),
                cardStyle: { backgroundColor: "#FFFFFF" },
                headerTransparent: true
              }}
        />
        <Stack.Screen 
            name="ViewAll"
            component={ViewAll}
            options={{
            header: ({ navigation, scene }) => (
              <Header
                title="View All"
                navigation={navigation}
                scene={scene}
                back={true}
                search={true}
              />
          ),
        cardStyle: { backgroundColor: "#F8F9FE" }
        }}
        />
      </Stack.Navigator>
    )
}

// Settings Screens
function SettingsStack(props) {
  return (
    <Stack.Navigator mode='card' headerMode='screen'>
      <Stack.Screen 
        updateAuth={props}
        name="Settings"
        component={Settings}
        options={{
        header: ({ navigation, scene }) => (
          <Header
            title="Settings"
            navigation={navigation}
            scene={scene}
          />
      ),
      cardStyle: { backgroundColor: "#F8F9FE" }
      }}
      />
    </Stack.Navigator>
  )
}

// Main App Stack tab navigator
function HomeStack() {
    return (
      <Tab.Navigator
        lazy={false}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;
            if (route.name === "Feed") {
              iconName = "home";
            } else if (route.name === "NerdList") {
              iconName = "user";
            } else if (route.name === "Explore") {
              iconName = "rocket1";
            } 
            // You can return any component that you like here!
            return (
              <Icon
                name={iconName}
                family="antdesign"
                size={25}
                color={color}
                style={{ marginTop: 10, marginBottom: 0 }}
              />
            );
          }
        })}
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: "gray",
          labelStyle: {
              fontFamily: 'OpenSans-regular',
              marginBottom: 0
          }
        }}
        initialRouteName="HomeStack"
      >
        <Tab.Screen name="Feed" component={FeedTabs}/>
        <Tab.Screen name="Explore" component={ExploreStack}/>
        <Tab.Screen name="NerdList" component={NerdListStack}/>
      </Tab.Navigator>
    );
}

// Main App Stack drawer navigator
function AppStack(props) {
    return (
      <Drawer.Navigator
        style={{ flex: 1 }}
        drawerContent={props => <CustomDrawerContent {...props} />}
        drawerStyle={{
          backgroundColor: "white",
          width: width * 0.8
        }}
        drawerContentOptions={{
          activeTintcolor: "white",
          inactiveTintColor: "#000",
          activeBackgroundColor: "transparent",
          itemStyle: {
            width: width * 0.75,
            backgroundColor: "transparent",
            paddingVertical: 16,
            paddingHorizonal: 12,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            overflow: "hidden"
          },
          labelStyle: {
            fontSize: 18,
            marginLeft: 12,
            fontWeight: "normal"
          }
        }}
        initialRouteName="Home"
      >
        <Drawer.Screen name="Home" component={HomeStack}/>
        <Drawer.Screen name="Settings" component={SettingsStack} updateAuth={props}/>
      </Drawer.Navigator> 
    );
  }

  // Authentication flow and AuthStack

  // Create Auth context 
  export const AuthContext = React.createContext();
  // Auth Stack
  function AuthStack() {
  // Auth state management via useState hook
    const [currentView, setCurrentView] = useState('initializing');
  // Checks if user is currently authenticated/signed in
  // Sets current view to main app if true
  // Sets current view to auth screens if false
    async function checkAuth() {
      try {
        await AmplifyAuth.currentAuthenticatedUser()
        console.log('user is signed in')
        setCurrentView('mainNav')
      } catch (err) {
        console.log('user is not signed in')
        setCurrentView('auth')
      }
    }

    useEffect( () => {
      checkAuth();
    }, []);

    // Set current view for authenticated or not authenticated users
    console.log('currentView: ', currentView)

    // Assigns Auth context provider a value of setCurrentView so the auth state may be changed from all nested screens
    return (
            <AuthContext.Provider value={setCurrentView}>
              { currentView === 'initializing' && <Initializing/>}
              { currentView === 'auth' && <Auth/>}
              { currentView === 'mainNav' && <AppStack/>}
            </AuthContext.Provider>
    )
  }

// AWS AUTH

export default AuthStack;