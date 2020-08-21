import React, { useState } from "react";
import { withNavigation } from '@react-navigation/compat';
import {
  StyleSheet,
  Image,
  Linking,
} from "react-native";
import { Block, Text } from "galio-framework";
import argonTheme from "../../constants/argonTheme";
import nerdProfiles from "../../constants/nerdProfiles";
import Icon from '../Icon';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function FeedVideoCard ({item}) {
    const handleClick = () => {
      Linking.canOpenURL(this.props.url).then(supported => {
        if (supported) {
          Linking.openURL(this.props.url);
        } else {
          console.log("Don't know how to open URL: " + this.props.url);
        }
      })};

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
                        >
                        {item.channel}
                        </Text>
                        <Block flexDirection='row'>
                            <Text
                            style={{fontFamily: 'OpenSans-regular', fontSize: 14, paddingLeft: '1%', color: argonTheme.COLORS.TEXT}}
                            numberOfLines={1}
                            >YouTube
                            </Text>
                            <Icon 
                            name='youtube'
                            family='antdesign'
                            size={16}
                            style={{paddingLeft: '1%', paddingTop: '0.6%'}}
                            color={argonTheme.COLORS.YOUTUBE}
                            />
                        </Block>
                    </Block>
                </Block>
            </Block>
            <TouchableOpacity onPress={() => console.log('Button Pressed')} style={{height: 250}} 
            hitSlop={{bottom: 0}}
            >
            <Image 
            source={{ uri: item.image }} 
            style={styles.image}
            />
            </TouchableOpacity>
            <Text 
            style={{fontFamily: 'OpenSans-regular', fontSize: 14, marginTop: '1%'}}
            numberOfLines={3}
            >
            {item.title}
            </Text>            
        </Block>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '90%',
        height: 300,
        marginBottom: '10%',
        marginTop: '5%',
        alignSelf: 'center'
    },
    image: {
        height: '100%',
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

