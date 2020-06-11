import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import FeedScreens from '../screens/FeedScreens';
import Explore from "../screens/Explore";
import NerdList from "../screens/NerdList";
import Profile from "../screens/Profile";
import ViewAll from "../screens/ViewAll";
import Onboarding from "../screens/Onboarding";
import SignInEmail from "../screens/SignInEmail";
import SignUpEmail from "../screens/SignUpEmail";
import SignUpSelect from "../screens/SignUpSelect";
import PasswordReset from '../screens/PasswordReset';
import Settings from "../screens/Settings";

import Icon from "../components/Icon";
import Header from '../components/Header';
import FeedHeader from '../components/FeedHeader';
import CustomDrawerContent from "../navigation/Menu";
import Search from '../screens/Search';
import { withAuthenticator } from 'aws-amplify-react-native'; 
import myTheme from '../constants/myTheme';

export const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const TabTop = createMaterialTopTabNavigator();
const { width } = Dimensions.get("screen");

function OnboardingStack() {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
      name="Onboarding"
      component={Onboarding}
      options={{
        headerTitle: null
      }}
      />
      <Stack.Screen 
      name='SignUpSelect'
      component={SignUpSelect}
      options={{
        headerTitle: null
      }}
      />
      <Stack.Screen 
      name='SignUpEmail'
      component={SignUpEmail}
      options={{
        headerTitle: null
      }}
      />
      <Stack.Screen 
      name='SignInEmail'
      component={SignInEmail}
      options={{
        headerTitle: null
      }}
      />
      <Stack.Screen
      name='PasswordReset'
      component={PasswordReset}
      options={{
        headerTitle: null
      }}
      />
    </Stack.Navigator>
  )
}


function FeedTabs() {
  return (
    <Stack.Navigator 
    mode="card" 
    headerMode='screen' 
    initialLayout={{ width: Dimensions.get('window').width }}
    screenOptions={{
      header: ({navigation, scene}) => {
        return (
          <FeedHeader
          title='Feed'
          navigation={navigation}
          scene={scene}
          />
        )
      }
    }}
    >
      <Stack.Screen name='FeedScreens' component={FeedScreens}
      />
    </Stack.Navigator>
  )
}

function SearchStack() {
  return (
    <Stack.Navigator mode='card' headerMode='screen'>
      <Stack.Screen name='Search' component={Search} />
    </Stack.Navigator>
  )
}

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

function SettingsStack() {
  return (
    <Stack.Navigator mode='card' headerMode='screen'>
      <Stack.Screen 
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
            } else if (route.name === 'Search') {
              iconName = "search1"
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
        <Tab.Screen name="Search" component={SearchStack}/>
        <Tab.Screen name="NerdList" component={NerdListStack}/>
      </Tab.Navigator>
    );
}

function AppStack() {
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
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="Settings" component={SettingsStack} />
      </Drawer.Navigator> 
    );
  }

function BootStack() {
  //Must implement way to get user data. See Dev tutorial.
    return (
        <Stack.Navigator mode="card" headerMode="none">
            <Stack.Screen name="App" component={AppStack}/>
        </Stack.Navigator>
    );
}

export default withAuthenticator(BootStack, false, [], null, myTheme);