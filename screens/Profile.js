import React, { useState } from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  View
} from "react-native";
import { Block, Text} from "galio-framework";
import Button from "../components/Profile/Button";
import argonTheme from "../constants/argonTheme";
import { FlatList, TouchableWithoutFeedback } from "react-native-gesture-handler";
import nerdProfiles from "../constants/nerdProfiles";
import ViewMoreText from 'react-native-view-more-text';
import { useNavigation } from '@react-navigation/native';
import {selectCategory} from '../constants/Categories';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import ProfileVideos from './ProfileVideos';
import ProfileArticles from './ProfileArticles';

const VideosRoute = () => (
    <ProfileVideos/>
  );
   
const ArticlesRoute = () => (
    <ProfileArticles/>
  );
   
const PodcastsRoute = () => (
    <Text>Podcasts</Text>
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
            height: 40
        }}    
        renderLabel={({ route, focused, color }) => (
            <Text 
            style={{ 
                color, 
                fontFamily: 'OpenSans-bold',
                fontSize: 14
                }}>
              {route.title}
            </Text>
          )}
    />
  );
   

export default function Profile(props) {
    const [loading, setLoading] = useState(true);
    async function profileLoaded() {
        
    }
    function renderCategories({item}) {
        const clr = selectCategory(item)
        return (
                <Button
                style={{
                width: 80,
                height: 30, 
                backgroundColor: clr,
                marginRight: 8,
                marginTop: 25
                }}
                >{item}
                </Button>
            )
    }

    const [following, setFollowing] = useState(false)

    const follow = () => {
        if (following) {
        return (
            <Block flex center flexDirection='row'>
            <Text 
            style={{ fontFamily: 'OpenSans-bold' }} size={14} color={argonTheme.COLORS.WHITE}
            >Following
            </Text>
            </Block>
            
        )
        } else {
        return (
            <Block flex center flexDirection='row'>
            <Text 
            style={{ fontFamily: 'OpenSans-bold' }} size={14} color={argonTheme.COLORS.WHITE}
            >Follow
            </Text>
            </Block>
        )
        }
    }
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
        <Block style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Block style={styles.profileHeader}>
                <Block style={styles.nameAndImg}>
                    <Block>
                    <Text 
                    style={styles.name}
                    numberOfLines={1}
                    >
                    {nerdProfiles.bios[0].firstName} {nerdProfiles.bios[0].lastName}
                    </Text>
                    <Button style={styles.followButton}
                    onPress={() => {
                        if(following) {
                          setFollowing(false)
                        } else {
                          setFollowing(true)
                        }
                      }}
                    >
                        {follow()}
                    </Button>
                    </Block>
                    <Block style={styles.avatarContainer}>
                    <Image 
                    source={{uri: nerdProfiles.bios[0].imgUrl}}
                    style={styles.avatar}
                    backgroundColor={argonTheme.COLORS.MUTED}
                    />
                    </Block>
                </Block>
                <Block style={styles.stats}>
                    <Block style={styles.followerCont}>
                        <Text style={styles.number}>43000</Text>
                        <Text style={styles.metric}>Followers</Text>
                    </Block>
                    <Block style={styles.contentCont}>
                        <Text style={styles.number}>9.5/10</Text>
                        <Text style={styles.metric}>Content Score</Text>
                    </Block>
                </Block>
                <Block style={styles.aboutContainer}>
                    <Text style={styles.about}>About</Text>
                    <Text style={styles.aboutText} left
                    >
                    {nerdProfiles.bios[0].description}
                    </Text>
                </Block>
                <FlatList 
                    style={styles.flatlist}
                    data={nerdProfiles.bios[0].fields}
                    renderItem={renderCategories}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEnabled={false}
                />
            </Block>
            <Block style={styles.profileBody}>
            </Block>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
                renderTabBar={renderTabBar}
            />
            </ScrollView>
        </Block>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: '23%',
        width: '90%',
        alignSelf: 'center',
        backgroundColor: argonTheme.COLORS.WHITE
    },
    profileHeader: {
        width: '100%',
    },
    nameAndImg: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
       
    },
    avatarContainer: {
        width: '70%',
    },
    avatar: {
        width: 115,
        height: 115,
        borderRadius: 62,
        borderWidth: 0,
        alignSelf: 'center',
        left: '5%'
    },
    name: {
        fontFamily: 'OpenSans-bold',
        fontSize: 24,
        marginBottom: '8%',
    },
    followButton: {
        width: '100%',
        height: 30,
        backgroundColor: argonTheme.COLORS.ACTIVE
    },
    stats: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: '5%'
    },
    contentCont: {
        paddingLeft: '5%'
    },
    number: {
        fontFamily: 'OpenSans-bold',
        fontSize: 18
    },
    metric: {
        fontFamily: 'OpenSans-regular',
        fontSize: 16
    },
    aboutContainer: {
        marginTop: '8%'
    },
    about: {
        fontFamily: 'OpenSans-bold',
        fontSize: 16,
    },
    aboutText: {
        fontFamily: 'OpenSans-regular',
        fontSize: 16
    },
    profileBody: {
        marginBottom: '5%'
    },
})