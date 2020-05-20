import React from "react";
import { withNavigation } from '@react-navigation/compat';
import PropTypes from "prop-types";
import {
  StyleSheet,
  Image,
  TouchableWithoutFeedback
} from "react-native";
import { Block, Text, theme } from "galio-framework";

import argonTheme from "../constants/argonTheme";

class ArticleCard extends React.Component {
  render() {
    const {
      navigation,
      item,
      horizontal,
      full,
      style,
      ctaColor,
      imageStyle,
      ctaRight
    } = this.props;

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
            source={{ uri: item.image }} 
            style={{flex:1, height: undefined, width: undefined, backgroundColor: argonTheme.COLORS.DEFAULT}}
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
            <Text style={styles.author} numberOfLines={1}> 
                {item.author}
            </Text>
            <Text style={styles.bottomText} numberOfLines={1}>
                {item.publisher}: {item.date}
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
    overflow: "hidden"
  },
  shadow: {
    shadowColor: argonTheme.COLORS.DEFAULT,
    shadowOffset: { width: 1, height: 3 },
    shadowRadius: 3,
    shadowOpacity: 0.4,
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

export default withNavigation(ArticleCard);
