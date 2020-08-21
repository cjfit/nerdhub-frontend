
import React, {useState, useEffect} from 'react';
import { useQuery, gql } from '@apollo/client';
import { StyleSheet, View, ActivityIndicator, FlatList, Text } from 'react-native';
import { Block } from 'galio-framework';
import argonTheme from '../../constants/argonTheme';
import FeedArticleCard from '../../components/Feed/FeedArticleCard';
import { BottomMetrics } from '../../components/Feed/BottomMetrics';
import nerdProfiles from '../../constants/nerdProfiles';

const REQUESTED_ARTICLES = gql`
query getArticles {
  articles(limit: 20) {
    author
    title
    urltoimage
    content
    description
    id
    publishedat
    sourcename
    sourceid
    url
  }
}
`; 

export default function FeedArticles() {

  const { loading, error, data } = useQuery(REQUESTED_ARTICLES);
  console.log(data)

  function renderArticleItem({item}) {
    return (
          <Block>
            <FeedArticleCard item={item}/>
            <BottomMetrics/>
          </Block>
      );
    }
 
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color={argonTheme.COLORS.ACTIVE}/>
      </View>
    )
  } else if (error) {
    console.log(error)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Error...</Text>
      </View>
    )
  }
  
  
  else {
    return (
      <View style={styles.container}>
        <FlatList
        data={data.articles}
        renderItem={renderArticleItem}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    width: '100%',
  }

})