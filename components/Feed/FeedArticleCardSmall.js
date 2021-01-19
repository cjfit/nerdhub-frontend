import React from 'react';
import {withNavigation} from '@react-navigation/compat';
import {
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Linking,
  Dimensions,
  View,
} from 'react-native';
import {Block, Text} from 'galio-framework';
import argonTheme from '../../constants/argonTheme';
import nerdProfiles from '../../constants/nerdProfiles';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import {useNavigation} from '@react-navigation/native';

export default function FeedArticleCardSmall({item}) {
  // Gets window width of device
  const windowWidth = Dimensions.get('window').width;

  // Creates navigation hook
  const navigation = useNavigation();

  // Inappbrowser configuration and function, should be moved to its own file
  async function OpenLink() {
    try {
      const url = item.url;
      if (await InAppBrowser.isAvailable()) {
        const result = await InAppBrowser.open(url, {
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
            */
        });
        console.log(result);
      } else Linking.openURL(url);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <Block style={styles.container}>
      <Block>
        <Block flexDirection="row" style={styles.bottom}>
          <Image
            source={{uri: item.sourceimgurl}}
            style={styles.avatar}
            resizeMode="contain"
          />
          <Block>
            <Text
              style={{
                fontFamily: 'OpenSans-bold',
                fontSize: 14,
                paddingLeft: '2%',
                color: argonTheme.COLORS.MUTED,
                width: windowWidth / 1.5,
              }}
              numberOfLines={1}></Text>
            <Block flexDirection="row">
              <Text
                style={{
                  fontFamily: 'OpenSans-regular',
                  fontSize: 14,
                  paddingLeft: '1%',
                  color: argonTheme.COLORS.MUTED,
                  width: windowWidth / 1.5,
                }}
                numberOfLines={1}>
                {item.source}
              </Text>
            </Block>
          </Block>
        </Block>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('Post');
          }}>
          <Text
            style={{
              fontFamily: 'OpenSans-Regular',
              fontSize: 14,
              marginTop: '2%',
              marginBottom: '2%',
              textAlign: 'left',
            }}
            numberOfLines={3}>
            {item.title}
          </Text>
        </TouchableWithoutFeedback>
      </Block>
      <TouchableWithoutFeedback onPress={OpenLink}>
        <Text
          style={{
            fontFamily: 'OpenSans-light',
            fontSize: 12,
            marginTop: '2%',
            marginBottom: '4%',
            textAlign: 'left',
          }}
          numberOfLines={3}>
          {item.description}
        </Text>
      </TouchableWithoutFeedback>
      <Block flexDirection="row"></Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    height: 110,
    marginBottom: '10%',
    marginTop: '5%',
    alignSelf: 'center',
  },
  linkimage: {
    width: 40,
    height: 40,
    borderRadius: 5,
  },
  avatar: {
    width: 40,
    height: 40,
  },
  bottom: {
    alignItems: 'center',
  },
});
