import React from "react";
import { withNavigation } from '@react-navigation/compat';
import PropTypes from "prop-types";
import {
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Linking
} from "react-native";
import { Block, Text, theme } from "galio-framework";
import argonTheme from "../constants/argonTheme";

class VideoCard extends React.Component {
  render() {
    const {
      item,
      horizontal,
    } = this.props;
    const handleClick = () => {
      Linking.canOpenURL(this.props.url).then(supported => {
        if (supported) {
          Linking.openURL(this.props.url);
        } else {
          console.log("Don't know how to open URL: " + this.props.url);
        }
      })};

    const cardContainer = [styles.card, styles.shadow];
    const imgContainer = [
      styles.imageContainer,
      horizontal ? styles.horizontalStyles : styles.verticalStyles,
      styles.shadow
    ];

    return (
      <TouchableWithoutFeedback>
      <Block row={horizontal} card flex style={cardContainer}>
          <Block flex style={imgContainer}>
            <Image 
            source={{ uri: item.image }} 
            style={{flex:1, height: undefined, width: undefined, backgroundColor: argonTheme.COLORS.ACTIVE}}
            resizeMode="center"
            />
          </Block>
          <Block flex space="between" style={styles.cardDescription}>
            <Text
                style={{ fontFamily: 'OpenSans-regular' }}
                size={16}
                style={styles.cardTitle}
                numberOfLines={3}
            >
                {item.title}
            </Text>
            <Block style={styles.bottomTextContainer}>
            <Text style={styles.author} numberOfLines={2}>
                {item.channel}
            </Text>
            <Text style={styles.bottomText} numberOfLines={1}>
                {item.date}
            </Text>
            </Block>
          </Block>
      </Block>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: argonTheme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    height: 250,
    width: 200,
    marginBottom: 4,
    marginTop: 0,
  },
  cardTitle: {
    color: argonTheme.COLORS.TEXT,
  },
  cardDescription: {
    padding: theme.SIZES.BASE / 2
  },
  imageContainer: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    elevation: 1,
    overflow: 'hidden',
    height: '60%'
  },
  shadow: {
    shadowColor: argonTheme.COLORS.ACTIVE,
    shadowOffset: { width: 1, height: 3 },
    shadowRadius: 3,
    shadowOpacity: 0.3,
    elevation: 2
  },
  bottomTextContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  author: {
    fontFamily: 'OpenSans-regular',
    fontSize: 14,
    color: argonTheme.COLORS.MUTED,
    paddingTop: 5,
  },
  bottomText: {
      fontFamily: 'OpenSans-regular',
      fontSize: 14,
      color: argonTheme.COLORS.MUTED,
  },

});

export default withNavigation(VideoCard);
