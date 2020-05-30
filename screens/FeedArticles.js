import React, {useState, useEffect} from 'react';
import argonTheme from '../constants/argonTheme';
import { Block, Text } from 'galio-framework';
import nerdProfiles from '../constants/nerdProfiles';
import FeedArticleCard from "../components/FeedArticleCard";
import { FlatList, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { StyleSheet, ActivityIndicator } from "react-native";
import { Button } from 'react-native-elements';
import Icon from '../components/Icon';
//import {articlesRef} from '../database';

export default function FeedArticles() {
  renderVideoItem = ({item}) => {
    return (
          <Block>
            <FeedArticleCard item={item}/>
            <Block flexDirection='row' style={{justifyContent: 'flex-start', alignItems: 'center'}}>
            <Button 
            title='1,357'
            type='clear'
            titleStyle={{
              fontFamily: 'OpenSans-bold',
              fontSize: 14,
              color: argonTheme.COLORS.TEXT
            }}
            icon={
              <Icon
              name='heart-outline'
              family='material-community'
              size={14}
              style={{marginTop: '4%'}}
              />
            }
            />
            <Button 
            title='164'
            type='clear'
            titleStyle={{
              fontFamily: 'OpenSans-bold',
              fontSize: 14,
              color: argonTheme.COLORS.TEXT
            }}
            icon={
              <Icon
              name='comment-outline'
              family='material-community'
              size={14}
              style={{marginTop: '10%'}}
              />
            }
            />
            <Text
            style={{
              fontFamily: 'OpenSans-regular',
              fontSize: 14,
              paddingLeft: '41%',
              color: argonTheme.COLORS.MUTED
            }}
            >4 days ago
            </Text>
            </Block>
          </Block>
      );
    }

  return (
          <Block style={styles.motherContainer}>
          <FlatList 
              keyExtractor={(item, index) => index.toString()}
              data={nerdProfiles.bios[0].articles}
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
  }

})