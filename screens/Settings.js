import React, {useState, useEffect} from "react";
import { StyleSheet, Button, Dimensions } from "react-native";
import { Block, Text} from "galio-framework";
import Icon from '../components/Icon';
import {Switch} from 'react-native';
import argonTheme from "../constants/argonTheme";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import auth from '@react-native-firebase/auth';

function Settings() {
function signOut(){
    auth()
    .signOut()
    .then(() => console.log('User signed out!'));
    }
    const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [isDark, setDark] = useState(false);
    const toggleDark = () => setDark(previousState => !previousState)
    return(
        <Block style={styles.container}>
            <Block style={styles.subContainer}>
                <Icon 
                name='user-circle'
                family='font-awesome-5'
                size={25}
                />
                <Text
                style={{fontFamily:'OpenSans-bold', fontSize: 18, paddingLeft: '3%'}}
                >
                Account
                </Text>
            </Block>
            <Block style={{marginTop: '5%'}}>
                <TouchableOpacity style={styles.itemContainer}>
                    <Text 
                    style={{fontFamily:'OpenSans-regular', fontSize: 18, color: argonTheme.COLORS.MUTED}}
                    >Edit Profile</Text>
                    <Icon 
                    name='chevron-right'
                    family='font-awesome-5'
                    color={argonTheme.COLORS.MUTED }
                    size={14}
                    style={{marginTop: '2%'}}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.itemContainer}>
                    <Text 
                    style={{fontFamily:'OpenSans-regular', fontSize: 18, color: argonTheme.COLORS.MUTED}}
                    >Change Password</Text>
                    <Icon 
                    name='chevron-right'
                    family='font-awesome-5'
                    color={argonTheme.COLORS.MUTED }
                    size={14}
                    style={{marginTop: '2%'}}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.itemContainer}>
                    <Text 
                    style={{fontFamily:'OpenSans-regular', fontSize: 18, color: argonTheme.COLORS.MUTED}}
                    >Privacy</Text>
                    <Icon 
                    name='chevron-right'
                    family='font-awesome-5'
                    color={argonTheme.COLORS.MUTED }
                    size={14}
                    style={{marginTop: '2%'}}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.itemContainer}
                onPress={signOut}
                >
                    <Text 
                    style={{fontFamily:'OpenSans-regular', fontSize: 18, color: argonTheme.COLORS.MUTED}}
                    >Log Out</Text>
                    <Icon 
                    name='chevron-right'
                    family='font-awesome-5'
                    color={argonTheme.COLORS.MUTED }
                    size={14}
                    style={{marginTop: '2%'}}
                    />
                </TouchableOpacity>
            </Block>
            <Block style={styles.subContainer}>
                <Icon 
                name='notification'
                family='entypo'
                size={25}
                />
                <Text
                style={{fontFamily:'OpenSans-bold', fontSize: 18, paddingLeft: '3%'}}
                >
                Notifications
                </Text>
            </Block>
            <Block style={{marginTop: '5%'}}>
                <TouchableOpacity style={styles.itemContainer}>
                    <Text 
                    style={{fontFamily:'OpenSans-regular', fontSize: 18, color: argonTheme.COLORS.MUTED}}
                    >Select Nerd Notifications</Text>
                    <Icon 
                    name='chevron-right'
                    family='font-awesome-5'
                    color={argonTheme.COLORS.MUTED }
                    size={14}
                    style={{marginTop: '2%'}}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.itemContainer}>
                    <Text 
                    style={{fontFamily:'OpenSans-regular', fontSize: 18, color: argonTheme.COLORS.MUTED}}
                    >App Notifications</Text>
                    <Switch
                    trackColor={{ false: argonTheme.COLORS.TEXT, true: argonTheme.COLORS.ACTIVE }}
                    thumbColor={isEnabled ? argonTheme.COLORS.WHITE : argonTheme.COLORS.WHITE}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    />
                </TouchableOpacity>
            </Block>
            <Block style={styles.subContainer}>
                <Icon 
                name='select1'
                family='antdesign'
                size={25}
                />
                <Text
                style={{fontFamily:'OpenSans-bold', fontSize: 18, paddingLeft: '3%'}}
                >
                More
                </Text>
            </Block>
            <Block style={{marginTop: '5%'}}>
                <TouchableOpacity style={styles.itemContainer}>
                    <Text 
                    style={{fontFamily:'OpenSans-regular', fontSize: 18, color: argonTheme.COLORS.MUTED}}
                    >About</Text>
                    <Icon 
                    name='chevron-right'
                    family='font-awesome-5'
                    color={argonTheme.COLORS.MUTED }
                    size={14}
                    style={{marginTop: '2%'}}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.itemContainer}>
                    <Text 
                    style={{fontFamily:'OpenSans-regular', fontSize: 18, color: argonTheme.COLORS.MUTED}}
                    >End User Agreement</Text>
                    <Icon 
                    name='chevron-right'
                    family='font-awesome-5'
                    color={argonTheme.COLORS.MUTED }
                    size={14}
                    style={{marginTop: '2%'}}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.itemContainer}>
                    <Text 
                    style={{fontFamily:'OpenSans-regular', fontSize: 18, color: argonTheme.COLORS.MUTED}}
                    >Dark Mode</Text>
                    <Switch
                    trackColor={{ false: argonTheme.COLORS.TEXT, true: argonTheme.COLORS.ACTIVE }}
                    thumbColor={isEnabled ? argonTheme.COLORS.WHITE : argonTheme.COLORS.WHITE}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleDark}
                    value={isDark}
                    />
                </TouchableOpacity>
            </Block>
        </Block>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '90%',
        alignSelf: 'center',
    },
    subContainer: {
        flexDirection: 'row',
        marginTop: '3%',
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '8%'
    }
})

export default Settings