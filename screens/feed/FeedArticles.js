
import React, {useState, useEffect} from 'react';
import { useQuery, gql } from '@apollo/client';
import { StyleSheet, View, ActivityIndicator, FlatList, Text } from 'react-native';
import { Block } from 'galio-framework';
import argonTheme from '../../constants/argonTheme';
import FeedArticleCard from '../../components/Feed/FeedArticleCard';
import { BottomMetrics } from '../../components/Feed/BottomMetrics';
import nerdProfiles from '../../constants/nerdProfiles';

// GraphQL query that gets 20 articles from hasura db
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

  // useQuery Apollo hook, returns a promise that resolves to either loading, error, or data
  const { loading, error, data } = useQuery(REQUESTED_ARTICLES);

  function renderArticleItem({item}) {
    return (
          <Block style={styles.articleCardContainer}>
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
      <View style={styles.parentContainer}>
        <FlatList
        data={data.articles}
        renderItem={renderArticleItem}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    alignSelf: 'center',
    width: '100%',
  },
  articleCardContainer: {
    backgroundColor: argonTheme.COLORS.WHITE,
    marginBottom: '2%',
    marginTop: '2%',
    borderRadius: 8,
  }

})