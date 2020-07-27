import React, { useState, useEffect} from 'react';
import { Block, Text } from 'galio-framework';
import argonTheme from "../constants/argonTheme";
import { StyleSheet, ScrollView} from "react-native";
import { FlatList, TouchableWithoutFeedback } from "react-native-gesture-handler";
import ViewAllArticleCard from '../components/Profile/ViewAllArticleCard';
import nerdProfiles from '../constants/nerdProfiles';

export default function ProfileArticles() {
    renderArticleItem = ({item}) => {
        return(
              <TouchableWithoutFeedback>
              <ViewAllArticleCard
                item={item}
              />
              </TouchableWithoutFeedback>
          );
        }
    return (
        <Block style={styles.container}>
            <Block>
                <FlatList 
                keyExtractor={(item, index) => index.toString()}
                data={nerdProfiles.bios[0].articles}
                renderItem={renderArticleItem}
                showsVerticalScrollIndicator={false}
                scrollEnabled={false}
                />
            </Block>
        </Block>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 5
    },

})