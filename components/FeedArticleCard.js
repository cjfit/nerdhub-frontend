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
import InAppBrowser from 'react-native-inappbrowser-reborn';

export default function FeedArticleCard ({item}) {
    async function OpenLink() {
        try {
          const url = item.url;
          if (await InAppBrowser.isAvailable()) {
            const result = await InAppBrowser.open(url , {
              // iOS Properties
              dismissButtonStyle: 'close',
              preferredBarTintColor: argonTheme.COLORS.WHITE,
              preferredControlTintColor: argonTheme.COLORS.ACTIVE,
              readerMode: false,
              animated: true,
              modalPresentationStyle: 'overFullScreen',
              /*modalTransitionStyle: 'partialCurl',
              modalEnabled: true,
              enableBarCollapsing: false,
              // Android Properties
              showTitle: true,
              toolbarColor: '#6200EE',
              secondaryToolbarColor: 'black',
              enableUrlBarHiding: true,
              enableDefaultShare: true,
              forceCloseOnRedirection: false,
              // Specify full animation resource identifier(package:anim/name)
              // or only resource name(in case of animation bundled with app).
              animations: {
                startEnter: 'slide_in_right',
                startExit: 'slide_out_left',
                endEnter: 'slide_in_left',
                endExit: 'slide_out_right'
              },
              headers: {
                'my-custom-header': 'my custom header value'
              }
            */})
            console.log(result);
          }
          else Linking.openURL(url)
        } catch (error) {
          console.log(error.message)
        }
      }

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
                            >{item.sourcename}
                            </Text>
                        </Block>
                    </Block>
                </Block>
            </Block>
            <TouchableWithoutFeedback onPress={OpenLink}>
            <Image 
            source={{ uri: item.urltoimage }} 
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

