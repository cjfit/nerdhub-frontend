import { Linking, Alert } from 'react-native'
import InAppBrowser from 'react-native-inappbrowser-reborn';
import argonTheme from '../constants/argonTheme';

async function OpenLink() {
    try {
      const url = 'https://openzang.netlify.app/';
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

export {OpenLink};