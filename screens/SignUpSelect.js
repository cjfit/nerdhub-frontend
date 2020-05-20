import React from 'react';
import { Block} from 'galio-framework';
import Icon from '../components/Icon';
import Images from "../constants/Images";
import argonTheme from '../constants/argonTheme';
import {ImageBackground, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
//import {GoogleSignIn} from '@react-native-community/google-signin'
//import WEB_CLIENT_ID from '../utils/keys';

/*GoogleSignIn.configure({
    webClientId: WEB_CLIENT_ID
})*/

function SignUpSelect() {

    /*async function onGoogleButtonPress() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
    }  */
    const navigation = useNavigation();
    return (
    <ImageBackground source={Images.Onboarding} style={styles.background}>
        <Image source={Images.OnboardingLogo} style={styles.img}/>
         <Block style={styles.container}>
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
            <Block style={styles.button}>
                <Button 
                title="Sign in with email"
                titleStyle={{fontFamily: 'OpenSans-bold', color: argonTheme.COLORS.WHITE, paddingLeft: '11%'}}
                type='solid'
                raised
                buttonStyle={{
                    backgroundColor: argonTheme.COLORS.ACTIVE,
                    width: '100%'
                }}
                icon={
                    <Icon
                    name='mail'
                    family='entypo'
                    size={25}
                    color={argonTheme.COLORS.WHITE}
                    />
                }
                onPress={() => navigation.navigate('SignUpEmail')}
                />
            </Block>
        </Block>
        </Block>
     </ImageBackground>

  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    img: {
        width: '90%',
        height: 100,
        marginBottom: '5%',
        marginTop: '35%'
    },
    buttonCont: {
  
        padding: '5%',
        borderRadius: 8
    },
    button: {
        marginBottom: '3%'
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    
})

export default SignUpSelect;