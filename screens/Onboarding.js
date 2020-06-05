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
            <Block style={styles.background}>
                <ImageBackground source={Images.blob} style={styles.blob}>
                <Image source={Images.OnboardingLogo} style={styles.img}/>
                <Block style={styles.textBlock}>
                    <Text style={styles.welcomeText}>
                        Centralize your favorite minds, 
                    </Text>
                    <Text style={styles.welcomeText}>
                        never miss a great idea.
                    </Text>
                </Block>
                </ImageBackground>
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
            </Block>
    )
}

const styles = StyleSheet.create({
    img: {
        width: '80%',
        height: 100,
        marginBottom: '5%',
        marginTop: '35%',
        zIndex: 1,
        alignSelf: 'center'
    },
    blob: {
        width: '100%',
        height: '76%',
        zIndex: 0
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: argonTheme.COLORS.DEFAULT
    },
    welcomeText: {
        fontFamily: 'OpenSans-regular',
        fontSize: 24,
        color: argonTheme.COLORS.WHITE,
        textAlign: 'center'
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