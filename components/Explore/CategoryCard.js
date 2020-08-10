import React from "react";
import { StyleSheet } from "react-native";
import PropTypes from 'prop-types';
import { Button } from "galio-framework";

import argonTheme from "../../constants/argonTheme";

class CategoryCard extends React.Component {
  render() {
    const { small, shadowless, children, color, style, fontSize, ...props } = this.props;
    
    const colorStyle = color && argonTheme.COLORS[color.toUpperCase()];

    const buttonStyles = [
      small && styles.smallButton,
      color && { backgroundColor: colorStyle },
      !shadowless && styles.shadow,
      {...style}
    ];

    return (
      <Button
        style={buttonStyles}
        shadowless
        textStyle={{ fontSize: fontSize || 14, fontWeight: '700' }}
        {...props}
      >
        {children}
      </Button>
    );
  }
}


const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.25,
    elevation: 2,
  },
  size: {
      width: 50,
      height: 100
  }
});

export default CategoryCard;
