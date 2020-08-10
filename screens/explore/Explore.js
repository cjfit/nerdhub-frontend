import React from 'react';
import { Block, Text} from 'galio-framework';
import { StyleSheet, FlatList, ActivityIndicator, View } from "react-native";
import { Button } from 'react-native-elements';
import Icon from '../../components/Icon';
import CategoryCard from '../../components/Explore/CategoryCard';
import argonTheme from "../../constants/argonTheme";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import nerdProfiles from '../../constants/nerdProfiles';
import {selectCategory} from '../../constants/Categories';
import FeedArticleCard from '../../components/Feed/FeedArticleCard';
import FeedVideoCard from '../../components/Feed/FeedVideoCard';
import FeedPodcastCard from '../../components/Feed/FeedPodcastCard';

export default function Explore() {

    function renderCategories({item}) {
        const clr = selectCategory(item)
        return (
                <CategoryCard
                style={{
                width: 150,
                height: 100, 
                backgroundColor: clr,
                marginRight: 8,
                marginTop: 10,
                marginBottom: 10
                }}
                >{item}
                </CategoryCard>
            )
    }

    function renderTrending({ item }) {
        const contentType = item.contentType
        const bottomSection = 
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
        >{item.publishedat}
        </Text>
        </Block>

        switch(contentType) {
            case 'article':
                return (
                    <Block>
                    <FeedArticleCard item={item}/>
                    {bottomSection}
                    </Block>
                )
            case 'video':
                return (
                    <Block>
                    <FeedVideoCard item={item}/>
                    {bottomSection}
                    </Block>
                )
            case 'podcast':
                return (
                    <FeedPodcastCard item={item}/>
                )
            default:
                return (<FeedArticleCard item={item}/>)
        }
    }

    return (
        <ScrollView style={styles.background}>
        <Block style={styles.container}>
            <Block style={styles.categories}>
                <Text style={styles.subheading}>Categories</Text>
                <FlatList 
                    style={styles.categoriesFlatlist}
                    data={nerdProfiles.bios[0].fields}
                    renderItem={renderCategories}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEnabled={true}
                />
            </Block>
            <Block>
                <Text style={styles.subheading}>Trending</Text>
                <FlatList 
                    style={styles.trendingFlatlist}
                    data={nerdProfiles.bios[0].videos}
                    renderItem={renderTrending}
                />
                
            </Block>
        </Block>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: argonTheme.COLORS.WHITE
    },
    container: {
        flex: 1,
        marginTop: '10%',
        width: '100%',
        alignSelf: 'center',
    },
    categories: {
        marginBottom: '10%',
    },
    subheading: {
        fontFamily: 'OpenSans-bold',
        fontSize: 16,
        width: '90%',
        alignSelf: 'center'
    },
    categoriesFlatlist: {
        width: '95%',
        alignSelf: 'flex-end',
        marginTop: '3%'
    },
    trendingFlatlist: {
        width: '90%',
        alignSelf: 'center'
    }
})
