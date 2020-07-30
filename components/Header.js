import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import { TouchableOpacity, StyleSheet, Platform, Dimensions } from 'react-native';
import { Button, Block, NavBar, Text, theme } from 'galio-framework';

import Icon from './Icon';
//import SearchBar from '../components/SearchBar';
import { SearchBar } from 'react-native-elements';
import Tabs from './Tabs';
import argonTheme from '../constants/argonTheme';
import { array } from 'prop-types';

const { height, width } = Dimensions.get('window');
const iPhoneX = () => Platform.OS === 'ios' && (height === 812 || width === 812 || height === 896 || width === 896);

const BellButton = ({isWhite, style, navigation}) => (
  <TouchableOpacity style={[styles.button, style]} onPress={() => navigation.navigate('Notifications')}>
    <Icon
      family="Entypo"
      size={16}
      name="home"
      color={argonTheme.COLORS[isWhite ? 'WHITE' : 'ICON']}
    />
    <Block middle style={styles.notify} />
  </TouchableOpacity>
);

const BasketButton = ({isWhite, style, navigation}) => (
  <TouchableOpacity style={[styles.button, style]} onPress={() => navigation.navigate('Cart')}>
    <Icon
      family="Entypo"
      size={16}
      name="home"
      color={argonTheme.COLORS[isWhite ? 'WHITE' : 'ICON']}
    />
  </TouchableOpacity>
);

const SearchButton = ({isWhite, style, navigation}) => (
  <TouchableOpacity style={[styles.button, style]} onPress={() => navigation.navigate('Search')}>
    <Icon
      size={16}
      family="feather"
      name="search"
      color={theme.COLORS[isWhite ? 'WHITE' : 'ICON']}
    />
  </TouchableOpacity>
);

class Header extends React.Component {
  handleLeftPress = () => {
    const { back, navigation } = this.props;
    return (back ? navigation.goBack() : navigation.openDrawer());
  }
  renderRight = () => {
    const { white, title, navigation } = this.props;
    // const { routeName } = navigation.state;

    if (title === 'Title') {
      return [
        <BellButton key='chat-title' navigation={navigation} isWhite={white} />,
        <BasketButton key='basket-title' navigation={navigation} isWhite={white} />
      ]
    }

    switch (title) {
      case 'Home':
      case 'Deals':
      case 'Categories':
      case 'Category':
      case 'Profile':
      case 'Product':
      case 'Search':
      case 'Settings':
        return ([
          // return header icons here
          null
        ]);
      default:
        break;
    }
  }
  renderSearch = () => {
    const { navigation } = this.props;
    return (
    <SearchBar 
      platform="ios"
      placeholder="Who Are You Looking For?" 
      containerStyle={{backgroundColor: argonTheme.COLORS.WHITE, width: '95%'}}
      inputContainerStyle={{
        backgroundColor: argonTheme.COLORS.WHITE,
        borderWidth: 1,
        borderBottomWidth: 1,
        borderColor: argonTheme.COLORS.ACTIVE
      }}
      inputStyle={{
        fontFamily: 'OpenSans-regular',
        color: argonTheme.COLORS.MUTED,
        fontSize: 14
      }}
      cancelButtonProps={{
        color: argonTheme.COLORS.ACTIVE, 
        buttonTextStyle: {fontFamily: 'OpenSans-regular', fontSize: 14},       
      }}
    />
    );
  }
  renderOptions = () => {
    const { navigation, optionLeft, optionRight } = this.props;

    return (
      <Block row style={styles.options}>
        <Button shadowless style={[styles.tab, styles.divider]} onPress={() => navigation.navigate('Beauty')}>
          <Block row middle>
            <Icon name="home" family="Entypo" style={{ paddingRight: 8 }} color={argonTheme.COLORS.ICON} />
            <Text style={{ fontFamily: 'OpenSans-Regular' }} size={16}  style={styles.tabTitle}>{optionLeft || 'Beauty'}</Text>
          </Block>
        </Button>
        <Button shadowless style={styles.tab} onPress={() => navigation.navigate('Fashion')}>
          <Block row middle>
            <Icon size={16} name="home" family="Entypo" style={{ paddingRight: 8 }} color={argonTheme.COLORS.ICON}/>
            <Text style={{ fontFamily: 'OpenSans-Regular' }} size={16} style={styles.tabTitle}>{optionRight || 'Fashion'}</Text>
          </Block>
        </Button>
      </Block>
    );
  }
  renderTabs = () => {
    const { tabs, tabIndex, navigation } = this.props;
    const defaultTab = tabs && tabs[0] && tabs[0].id;
    
    if (!tabs) return null;

    return (
      <Tabs
        data={tabs || []}
        initialIndex={tabIndex || defaultTab}
        onChange={id => navigation.setParams({ tabId: id })} />
    )
  }
  renderHeader = () => {
    const { search, options, tabs } = this.props;
    if (search || tabs || options) {
      return (
        <Block center>
          {search ? this.renderSearch() : null}
          {options ? this.renderOptions() : null}
          {tabs ? this.renderTabs() : null}
        </Block>
      );
    }
  }
  render() {
    const { back, title, white, transparent, bgColor, iconColor, titleColor, navigation, ...props } = this.props;
    // const { routeName } = navigation.state;
    const noShadow = ['Search', 'Categories', 'Deals', 'Pro', 'Profile'].includes(title);
    const headerStyles = [
      !noShadow ? styles.shadow : null,
      transparent ? { backgroundColor: 'rgba(0,0,0,0)' } : null,
    ];

    const navbarStyles = [
      styles.navbar,
      bgColor && { backgroundColor: bgColor }
    ];

    return (
      <Block style={styles.background}>
        <NavBar
          back={false}
          title={title}
          style={navbarStyles}
          transparent={transparent}
          right={this.renderRight()}
          rightStyle={{ alignItems: 'center' }}
          onLeftPress={this.handleLeftPress}
          left={
            <Icon 
              name={back ? 'chevron-left' : "menu"} family="entypo" 
              // name={back ? 'nav-left' : "menu-8"} family="ArgonExtra" 
              size={back ? 20 : 20} onPress={this.handleLeftPress}
              color={iconColor || (white ? argonTheme.COLORS.WHITE : argonTheme.COLORS.ICON)}
              style={{ marginTop: 2 }}
              />
          }
          leftStyle={{ paddingVertical: 12 }}
          titleStyle={[
            styles.title,
            { color: argonTheme.COLORS[white ? 'WHITE' : 'TEXT'] },
            titleColor && { color: titleColor }
          ]}
          {...props}
        />
        {this.renderHeader()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    position: 'relative',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  background: {
    backgroundColor: argonTheme.COLORS.WHITE,
  },
  navbar: {
    paddingTop: '10%',
    paddingBottom: 0,
    zIndex: 5,
  },
  notify: {
    backgroundColor: argonTheme.COLORS.LABEL,
    borderRadius: 4,
    height: theme.SIZES.BASE / 2,
    width: theme.SIZES.BASE / 2,
    position: 'absolute',
    top: 9,
    right: 12,
  },
  header: {
    backgroundColor: argonTheme.COLORS.WHITE,
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.ICON,
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: argonTheme.COLORS.BORDER
  },
  options: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.35,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '400',
    color: argonTheme.COLORS.HEADER
  },
});

export default withNavigation(Header);
