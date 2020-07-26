import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import { TouchableOpacity, StyleSheet, Platform, Dimensions, View } from 'react-native';
import { Block, NavBar, Text, theme } from 'galio-framework';
import Icon from './Icon';
import argonTheme from '../constants/argonTheme';
import { useNavigation } from '@react-navigation/native';

const { height, width } = Dimensions.get('window');
const iPhoneX = () => Platform.OS === 'ios' && (height === 812 || width === 812 || height === 896 || width === 896);

function FeedHeader(props) {  
  const navigation = useNavigation();
  handleLeftPress = () => {
    return (back ? navigation.goBack() : navigation.openDrawer());
  }
  const { back, title, white, transparent, bgColor, iconColor, titleColor } = props;

    return (
      <Block>
        <NavBar
          back={false}
          title={title}
          style={styles.navbar}
          transparent={transparent}
          rightStyle={{ alignItems: 'center' }}
          onLeftPress={handleLeftPress}
          left={
            <Icon 
              name={back ? 'chevron-left' : "menu"} family="entypo" 
              // name={back ? 'nav-left' : "menu-8"} family="ArgonExtra" 
              size={back ? 20 : 20} onPress={handleLeftPress}
              color={iconColor || (white ? argonTheme.COLORS.WHITE : argonTheme.COLORS.ICON)}
              style={{ marginTop: 2 }}
              />
          }
          leftStyle={{ paddingVertical: 12, flex: 0.2, paddingLeft: '4%' }}
          titleStyle={[
            styles.title,
            { color: argonTheme.COLORS[white ? 'WHITE' : 'TEXT'] },
            titleColor && { color: titleColor }
          ]}
          {...props}
        /> 
      </Block>
    );
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    position: 'relative',
  },
  title: {
    width: '100%',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    left: '3%'
  },
  navbar: {
    paddingTop: '10%',
    paddingBottom: 0,
    zIndex: 5,
    alignItems: 'center',
  },
  shadow: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 3,
  },
  header: {
    backgroundColor: theme.COLORS.WHITE,
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.ICON,
  },
  scene: {
    flex: 1
  }
});

export default withNavigation(FeedHeader);
