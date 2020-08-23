import React, { useState } from 'react';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import FeedPodcasts from './FeedPodcasts';
import FeedVideos from './FeedVideos';
import FeedArticles from './FeedArticles';
import { Dimensions, StyleSheet, View } from 'react-native';
import argonTheme from '../../constants/argonTheme';
import { Text } from "galio-framework";


const VideosRoute = () => (
    <FeedVideos/>
  );
   
const ArticlesRoute = () => (
    <FeedArticles/>
  );
   
const PodcastsRoute = () => (
    <FeedPodcasts/>
  );

const initialLayout = { width: Dimensions.get('window').width };

const renderTabBar = props => (
    <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: argonTheme.COLORS.ACTIVE }}
        activeColor={argonTheme.COLORS.TEXT}
        inactiveColor={argonTheme.COLORS.MUTED}
        style={{ 
            backgroundColor: null,
            height: '5%',
        }}
        renderLabel={({ route, focused, color }) => (
            <Text 
            style={{ 
                color, 
                fontFamily: 'OpenSans-bold',
                fontSize: 14,
             
                }}>
              {route.title}
            </Text>
          )}
    />
  );

export default function FeedScreens() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'videos', title: 'Videos' },
        { key: 'articles', title: 'Articles' },
        { key: 'podcasts', title: 'Podcasts' },
    ]);
    
    const renderScene = SceneMap({
        videos: VideosRoute,
        articles: ArticlesRoute,
        podcasts: PodcastsRoute
    });

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={renderTabBar}
            style={styles.background}
        />
    )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: argonTheme.COLORS.OFF_WHITE_BACKGROUND
  }
})
