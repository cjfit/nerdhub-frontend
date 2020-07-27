import React from "react";
import { Block } from "galio-framework";
import { StyleSheet } from "react-native";
import { FlatList, TouchableWithoutFeedback } from "react-native-gesture-handler";
import nerdProfiles from "../constants/nerdProfiles";
import ViewAllVideoCard from "../components/Profile/ViewAllVideoCard";
import ViewAllArticleCard from '../components/Profile/ViewAllArticleCard';
import argonTheme from "../constants/argonTheme";
import { withNavigation } from "@react-navigation/compat";

function ViewAll(props) {
  const {type} = props.route.params;
  renderVideoItem = ({item}) => {
    return(
          <TouchableWithoutFeedback>
          <ViewAllVideoCard
            item={item}
          />
          </TouchableWithoutFeedback>
      );
    }
  renderArticleItem = ({item}) => {
    return(
          <TouchableWithoutFeedback>
          <ViewAllArticleCard
            item={item}
          />
          </TouchableWithoutFeedback>
      );
    }

  function selectData(type) {
    switch(type) {
      case "videos":
          return nerdProfiles.bios[0].videos;
      case "articles":
        return nerdProfiles.bios[0].articles;
      default:
        // TODO error handeling
      }
    }

  function selectRender(type) {
     switch(type) {
      case "videos":
        return renderVideoItem;
      case "articles":
        return renderArticleItem;
      default:
        // TODO error handeling
      }
    }

  const data = selectData(type);
  const renderMethod = selectRender(type);

  return (
        <Block style={styles.flatListContainer}>
          <FlatList 
              keyExtractor={(item, index) => index.toString()}
              data={data}
              renderItem={renderMethod}
              showsVerticalScrollIndicator={false}
          />
        </Block>
        );
}

const styles = StyleSheet.create({
    flatListContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: argonTheme.COLORS.OFF_WHITE_BACKGROUND
    }
})

export default withNavigation(ViewAll);