import React from 'react';
import { StyleSheet, Image, ImageBackground } from 'react-native';
import { Block, Text } from 'galio-framework';
import { withNavigation } from '@react-navigation/compat';
import Images from "../constants/Images";
import argonTheme from "../constants/argonTheme";
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';

function Onboarding() {

    const navigation = useNavigation();
    
    return (
            <ImageBackground source={Images.Onboarding} style={styles.background}>
                <Image source={Images.OnboardingLogo} style={styles.img}/>
                <Block style={styles.textBlock}>
                    <Text style={styles.welcomeText}>
                        Centralize your favorite minds, 
                    </Text>
                    <Text style={styles.welcomeText}>
                        never miss a great idea.
                    </Text>
                </Block>
                <Block style={styles.buttonContainer}>
                    <Button
                        title="Log In"
                        titleStyle={{fontFamily: 'OpenSans-bold', color: argonTheme.COLORS.WHITE}}
                        type='solid'
                        raised
                        buttonStyle={{
                            backgroundColor: argonTheme.COLORS.ACTIVE,
                            width: '100%'
                     }}
                     onPress={() => navigation.navigate('SignInEmail')}
                    />
                    <Button
                        title="Sign Up"
                        titleStyle={{fontFamily: 'OpenSans-bold', color: argonTheme.COLORS.WHITE}}
                        type='solid'
                        raised
                        containerStyle={{marginTop: '4%'}}
                        buttonStyle={{
                            backgroundColor: argonTheme.COLORS.ACTIVE,
                            width: '100%',
                     }}
                        onPress={() => navigation.navigate('SignUpEmail')}
                    />
                </Block>
            </ImageBackground>
    )
}

const styles = StyleSheet.create({
    img: {
        width: '90%',
        height: 100,
        marginBottom: '5%',
        marginTop: '35%'
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    welcomeText: {
        fontFamily: 'OpenSans-regular',
        fontSize: 24,
        color: argonTheme.COLORS.WHITE,
        textAlign: 'center',
        textShadowColor: argonTheme.COLORS.BLACK,
        textShadowOffset: { width: -1, height: 2 },
        textShadowRadius: 3, 
    },
    textBlock: {
        marginBottom: '30%'
    },
    button: {
        width: 250,
        marginTop: 15,
        fontFamily: 'OpenSans-regular',
        fontSize: 24
    },
    buttonContainer: {
        flex: 1,
    }

})
export default withNavigation(Onboarding);