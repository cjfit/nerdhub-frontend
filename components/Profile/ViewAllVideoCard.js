import React from "react";
import { withNavigation } from '@react-navigation/compat';
import {
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Linking
} from "react-native";
import { Block, Text } from "galio-framework";
import argonTheme from "../../constants/argonTheme";

class ViewAllVideoCard extends React.Component {
  render() {
    const {
      navigation,
      item,
      horizontal
    } = this.props;
    const handleClick = () => {
      Linking.canOpenURL(this.props.url).then(supported => {
        if (supported) {
          Linking.openURL(this.props.url);
        } else {
          console.log("Don't know how to open URL: " + this.props.url);
        }
      })};

    return (
      <TouchableWithoutFeedback>
      <Block flex style={styles.card}>
          <Block flex style={styles.imageContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
          </Block>
          <Block flex space="between" style={styles.cardDescription}>
            <Text
                size={14}
                style={styles.cardTitle}
                numberOfLines={3}
            >
                {item.title}
            </Text>
            <Block style={styles.bottomTextContainer}>
            <Text style={styles.author} numberOfLines={1}>
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
    borderWidth: 0,
    minHeight: 115,
    width:'90%',
    alignSelf: 'center',
    marginBottom: 5,
    marginTop: 5,
    borderRadius: 5,
    flexDirection: 'row'
  },
  cardTitle: {
    color: argonTheme.COLORS.TEXT,
    fontFamily: 'OpenSans-regular'
  },
  cardDescription: {
    paddingLeft: 5,
    maxHeight: 100,
  },
  imageContainer: {
    borderRadius: 5,
    elevation: 1,
    overflow: "hidden"
  },
  image: {
    minHeight: 115,
    width: '100%',
    backgroundColor: argonTheme.COLORS.MUTED
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

export default withNavigation(ViewAllVideoCard);
