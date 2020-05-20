import React from "react";
import { ScrollView, StyleSheet, Dimensions, Image, TouchableOpacity, Linking } from "react-native";
import { Block, Text, theme } from "galio-framework";
import { useSafeArea } from "react-native-safe-area-context";
import Images from "../constants/Images";
import DrawerItem from '../components/DrawerItem'

const { width } = Dimensions.get("screen");

function CustomDrawerContent({ drawerPosition, navigation, profile, focused, state, ...rest }) {
  const insets = useSafeArea();
  const screens = [
    "Feed",
    "Settings"
  ];
  return (
    <Block
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <Block flex={0.06} style={styles.header}>
        <Image source={Images.DrawerLogo2} style={styles.logo} />
      </Block>
      <Block flex style={{ paddingLeft: 8, paddingRight: 14 }}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          {screens.map((item, index) => {
              return (
                <DrawerItem
                  title={item}
                  key={index}
                  navigation={navigation}
                  focused={state.index === index ? true : false}
                />
              );
            })}
        </ScrollView>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    paddingHorizontal: 28,
    paddingBottom: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 3,
    justifyContent: "center"
  },
  logo: {
    width: 160,
    height: 50
  }

});

export default CustomDrawerContent;
