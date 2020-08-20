import React, {useState} from 'react';
import { Block } from 'galio-framework';
import nerdProfiles from '../../constants/nerdProfiles';
import FeedVideoCard from "../../components/Feed/FeedVideoCard";
import { FlatList } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { BottomMetrics } from '../../components/Feed/BottomMetrics';

export default function FeedVideos() {
  renderVideoItem = ({item}) => {
    return (
          <Block>
            <FeedVideoCard
              item={item}
            />
            <BottomMetrics/>
          </Block>
      );
    }
    
  return (
          <Block style={styles.motherContainer}>
          <FlatList 
              keyExtractor={(item, index) => index.toString()}
              data={nerdProfiles.bios[0].videos}
              renderItem={renderVideoItem}
              showsVerticalScrollIndicator={false}
          />
          </Block>
    );
}

const styles = StyleSheet.create({
  motherContainer: {
    flex: 1,
    alignSelf: 'center',
    width: '100%',
  }

})