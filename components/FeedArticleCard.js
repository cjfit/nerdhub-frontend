import React, { useState } from "react";
import { withNavigation } from '@react-navigation/compat';
import {
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Linking,
} from "react-native";
import { Block, Text } from "galio-framework";
import argonTheme from "../constants/argonTheme";
import nerdProfiles from "../constants/nerdProfiles";
import {OpenLink} from '../navigation/InAppBrowser';

export default function FeedArticleCard ({item}) {

    return (
        <Block style={styles.container}>
            <Block>
                <Block flexDirection='row' style={styles.bottom}>
                    <Image 
                    source={{ uri: nerdProfiles.bios[0].imgUrl}}
                    style={styles.avatar}
                    />
                    <Block>
                        <Text
                        style={{fontFamily: 'OpenSans-bold', fontSize: 14, paddingLeft: '2%', color: argonTheme.COLORS.TEXT}}
                        numberOfLines={1}
                        >
                        {item.author}
                        </Text>
                        <Block flexDirection='row'>
                            <Text
                            style={{fontFamily: 'OpenSans-regular', fontSize: 14, paddingLeft: '1%', color: argonTheme.COLORS.TEXT}}
                            numberOfLines={1}
                            >{item.date} - {item.publisher}
                            </Text>
                        </Block>
                    </Block>
                </Block>
            </Block>
            <TouchableWithoutFeedback onPress={OpenLink}>
            <Image 
            source={{ uri: item.image }} 
            style={styles.image}
            />
            </TouchableWithoutFeedback>
            <Text 
            style={{fontFamily: 'OpenSans-regular', fontSize: 14, marginTop: '3%'}}
            numberOfLines={2}
            >
            {item.title}
            </Text>        
            <Block flexDirection='row'>
            </Block>
        </Block>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '95%',
        height: 300,
        marginBottom: '10%',
        marginTop: '5%',
        alignSelf: 'center'
    },
    image: {
        height: '78%',
        width: '100%',
        borderRadius: 5,
        backgroundColor: argonTheme.COLORS.MUTED
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50/2,
        marginBottom: '1%',
        backgroundColor: argonTheme.COLORS.MUTED
    },
    bottom: {
        alignItems: 'center'
    }
});

