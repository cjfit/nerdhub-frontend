import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  ImageBackground,
  Dimensions,
  Animated,
} from 'react-native';
import argonTheme from '../../constants/argonTheme';
import SlidingUpPanel from 'rn-sliding-up-panel';

import {Button} from 'react-native-elements';

import Icon from '../../components/Icon';

const windowWidth = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Post extends React.Component {
  //params name not consistent - fix later

  static defaultProps = {
    draggableRange: {top: height + 180 - 64, bottom: 180},
  };
  _draggedValue = new Animated.Value(0);

  render() {
    const {top, bottom} = this.props.draggableRange;

    const backgoundOpacity = this._draggedValue.interpolate({
      inputRange: [height - 48, height],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    const iconTranslateY = this._draggedValue.interpolate({
      inputRange: [height - 56, height, top],
      outputRange: [0, 56, 180 - 32],
      extrapolate: 'clamp',
    });

    const textTranslateY = this._draggedValue.interpolate({
      inputRange: [bottom, top],
      outputRange: [0, 8],
      extrapolate: 'clamp',
    });

    const textTranslateX = this._draggedValue.interpolate({
      inputRange: [bottom, top],
      outputRange: [0, -112],
      extrapolate: 'clamp',
    });

    const textScale = this._draggedValue.interpolate({
      inputRange: [bottom, top],
      outputRange: [1, 0.7],
      extrapolate: 'clamp',
    });
    var postimg = null;

    const {route} = this.props;
    /* 
    if (route.params.item.articlefullimgurl == 'NULL') {
      postimg = ''../../assets/imgs/forWeb/svg/Colorlogowithbackground.svg';
    } else postimg = route.params.item.articlefullimgurl; */

    function ArticleImgExists() {
      if (route.params.item.articlefullimgurl == 'NULL') {
        return (
          <View style={styles.nhlogocont}>
            <ImageBackground
              source={require('../../assets/imgs/forWeb/png/color_no_background_logo_only.png')}
              style={styles.logoimage}></ImageBackground>
          </View>
        );
      }
      return (
        <ImageBackground
          source={{uri: route.params.item.articlefullimgurl}}
          style={styles.image}
          //blurRadius={1}> // to blur or not to blur...
        >
          <View style={styles.child}></View>
        </ImageBackground>
      );
    }
    return (
      <View style={styles.container}>
        <ArticleImgExists />

        <SlidingUpPanel
          ref={(c) => (this._panel = c)}
          draggableRange={this.props.draggableRange}
          animatedValue={this._draggedValue}
          snappingPoints={[]} //Not needed as of right now - CF
          height={height + 180}
          friction={0.5}>
          <View style={styles.articleTextCont}>
            <View style={styles.articleTitle}>
              <Text style={styles.textHeader} numberOfLines={3}>
                {route.params.item.title}
              </Text>
            </View>

            <View style={styles.articleSourceTitle}>
              <Text style={styles.sourceTextHeader} numberOfLines={1}>
                {route.params.item.source}
              </Text>
            </View>

            <View style={styles.articleDateTitle}>
              <Text style={styles.dateTextHeader} numberOfLines={1}>
                {route.params.item.datepublished}
              </Text>
            </View>
          </View>

          <View style={styles.panel}>
            <View style={styles.iconBg}>
              <Button
                icon={
                  <Icon
                    name="heart-outline"
                    family="material-community"
                    size={20}
                    color="red"
                    iconStyle="regular"
                  />
                }
                iconRight
                titleStyle={styles.buttonText}
                style={{borderRadius: 40}}
                title="0  "
                type="clear"
              />
            </View>
            <View style={styles.icon2Bg}>
              <Button
                icon={
                  <Icon
                    name="comment-outline"
                    family="material-community"
                    size={20}
                    style="outline"
                    color="red"
                    iconStyle="regular"
                  />
                }
                iconRight
                titleStyle={styles.buttonText}
                style={{borderRadius: 40}}
                title="0  "
                type="clear"
              />
            </View>

            <View style={styles.panelHeader}>
              <Text style={styles.panelDescription}>
                {route.params.item.description}
              </Text>
              <View style={styles.button}>
                <Button
                  icon={
                    <Icon
                      family="font-awesome"
                      name="link"
                      size={15}
                      color="white"
                    />
                  }
                  title="  Open article"
                  style={{padding: 15}}
                  buttonStyle={{borderRadius: 8}}
                />
              </View>
            </View>
            <View style={styles.container}>
              <Text>Bottom sheet content</Text>
            </View>
          </View>
        </SlidingUpPanel>
      </View>
    );
  }
}

export default Post;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'column',
    width: windowWidth,
    height: height * 0.75,
  },
  nhlogocont: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: height + 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: windowWidth + 600,
    height: height - 100,
    transform: [{scale: 0.7}],
  },
  child: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  logoimage: {
    width: windowWidth + 600,
    height: height + 100,
    top: 100,
    transform: [{scale: 0.2}],
  },
  slider: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  panel: {
    flex: 1,
    position: 'relative',
  },
  panelHeader: {
    height: height + 300,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 34,
    borderRadius: 35,
  },
  textHeader: {
    fontSize: 24,
    color: '#ffffff',
  },
  textHeader2: {
    fontSize: 20,
    color: '#000fff',
    top: 5,
  },
  sourceTextHeader: {
    fontSize: 18,
    color: '#ffffff',
  },
  panelDescription: {
    fontSize: 16,
    color: '#000000',
  },
  dateTextHeader: {
    fontSize: 14,
    color: '#ffffff',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -24,
    right: 18,
    width: 48,
    height: 48,
    zIndex: 1,
  },
  iconBg: {
    backgroundColor: '#ffffff',
    position: 'absolute',
    top: -24,
    right: 18,
    width: 48,
    height: 48,
    borderRadius: 24,
    zIndex: 1,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon2Bg: {
    backgroundColor: '#ffffff',
    position: 'absolute',
    top: -24,
    right: 90,
    width: 48,
    height: 48,
    borderRadius: 24,
    zIndex: 1,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  articleTextCont: {
    flexDirection: 'column',
    flex: 1,
    position: 'absolute',
    padding: 12,
    top: -150,
    left: 5,
    right: 35,
    bottom: height + 180,
    borderRadius: 24,
    zIndex: 1,
  },
  articleTitle: {
    flexDirection: 'row',
    flex: 3,
    position: 'relative',
    alignContent: 'flex-end',
    alignItems: 'flex-end',
  },
  articleSourceTitle: {
    position: 'relative',
  },
  articleDateTitle: {
    position: 'relative',
  },
  buttonText: {
    fontFamily: 'OpenSans-bold',
    fontSize: 14,
    color: '#cc0000',
    flexDirection: 'column',
  },
  button: {
    borderRadius: 35,
  },
});
