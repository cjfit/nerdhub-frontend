import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Dimensions,
  Image
} from "react-native";
import { Block, Text} from "galio-framework";
import Button from "../components/Profile/Button";
import argonTheme from "../constants/argonTheme";
import { FlatList, TouchableWithoutFeedback } from "react-native-gesture-handler";
import nerdProfiles from "../constants/nerdProfiles";
import ViewMoreText from 'react-native-view-more-text';
import { useNavigation } from '@react-navigation/native';
import {selectCategory} from '../constants/Categories';
import ViewAllVideoCard from "../components/Profile/ViewAllVideoCard";
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Icon from '../components/Icon';

const initialLayout = { width: Dimensions.get('window').width };
   

export default function Profile(props) {
    
    // Initiate loading
    const [loading, setLoading] = useState(true);

    // View more text logic
    function renderViewMore(onPress){
        return(
            <Block right>
                <Icon onPress={onPress} name='unfold-more' family='MaterialIcons' size={20} color={argonTheme.COLORS.TEXT} style={{marginTop: '2%'}}/>
            </Block>
        )
      }

      function renderViewLess(onPress){
        return(
            <Block right>
                <Icon onPress={onPress} name='unfold-more' family='MaterialIcons' size={20} color={argonTheme.COLORS.TEXT} style={{marginTop: '2%'}}/>
            </Block>
        )
      }

    // Renders function for a flatlist of categories associated with the nerd
    function renderCategories({item}) {
        const clr = selectCategory(item)
        return (
                <Button
                style={{
                width: 80,
                height: 30, 
                backgroundColor: clr,
                marginRight: 8,
                marginTop: '25%'
                }}
                >{item}
                </Button>
            )
    }
    

    // Renders the selected media for the flatlist
    function renderMedia({item}) {
        return (
            <ViewAllVideoCard item={item}/>
        )
    }

    // Following function
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

    // Material Menu 
    const [media, setMedia] = useState(nerdProfiles.bios[0].videos);
    const [mediaTitle, setMediaTitle] = useState('Videos')

    const menu = useRef();

    const displayVideos = () => {
        menu.current.hide();
        setMedia(nerdProfiles.bios[0].videos);
        setMediaTitle('Videos');
    };
    const displayArticles = () => {
        menu.current.hide();
        setMedia(nerdProfiles.bios[0].articles);
        setMediaTitle('Articles');
    };
  
    const showMenu = () => menu.current.show();
    
    // Define flatlist section header
    const profileHeader = 
        <Block style={styles.container}>
            <Block style={styles.profileHeader}>
                <Block style={styles.nameAndImg}>
                    <Block>
                    <Text 
                    style={styles.name}
                    numberOfLines={1}
                    >
                    {nerdProfiles.bios[0].firstName} {nerdProfiles.bios[0].lastName}
                    </Text>
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
                    </Block>
                    <Block style={styles.avatarContainer}>
                    <Image 
                    source={{uri: nerdProfiles.bios[0].imgUrl}}
                    style={styles.avatar}
                    backgroundColor={argonTheme.COLORS.MUTED}
                    />
                    </Block>
                </Block>
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
                <Block style={styles.aboutContainer}>
                    <Text style={styles.about}>About</Text>
                    <ViewMoreText
                        numberOfLines={3}
                        renderViewMore={renderViewMore}
                        renderViewLess={renderViewLess}
                    >
                        <Text style={styles.aboutText} left>
                        {nerdProfiles.bios[0].description}
                        </Text>
                    </ViewMoreText>
                </Block> 
                <FlatList 
                    data={nerdProfiles.bios[0].fields}
                    renderItem={renderCategories}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEnabled={false}
                />
                <Block style={{flexDirection: 'row', justifyContent: 'space-between', paddingTop: '7%'}}>
                    <Text style={styles.about}>{mediaTitle}</Text>
                <Menu ref={menu} button={<Icon onPress={showMenu} size={25} family="material-community" name="dots-horizontal"/>}>
                    <MenuItem onPress={displayVideos} textStyle={styles.menuText}>Videos</MenuItem>
                    <MenuItem onPress={displayArticles} textStyle={styles.menuText}>Articles</MenuItem>
                    <MenuItem onPress={displayArticles} textStyle={styles.menuText}>Podcasts</MenuItem>
                </Menu>
                </Block>
            </Block>
        </Block>
    
    return (
            <FlatList 
                ListHeaderComponent={profileHeader}
                renderItem={renderMedia}
                data={media}
            />
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
        fontSize: 20,
        marginBottom: '8%',
    },
    followButton: {
        width: '100%',
        height: 30,
        backgroundColor: argonTheme.COLORS.ACTIVE,
        marginTop: '5%'
    },
    stats: {
        flexDirection: 'row',
        justifyContent: 'flex-start',

    },
    contentCont: {
        paddingLeft: '5%'
    },
    number: {
        fontFamily: 'OpenSans-bold',
        fontSize: 16
    },
    metric: {
        fontFamily: 'OpenSans-regular',
        fontSize: 14,
        color: argonTheme.COLORS.MUTED
    },
    aboutContainer: {
        marginTop: '8%',
    },
    about: {
        fontFamily: 'OpenSans-bold',
        fontSize: 16,
    },
    aboutText: {
        fontFamily: 'OpenSans-regular',
        fontSize: 16,
        color: argonTheme.COLORS.TEXT
    },
    viewTextButton: {
        fontFamily: 'OpenSans-regular',
        fontSize: 14,
        color: argonTheme.COLORS.ACTIVE,
        marginTop: '2%'
    },
    repositoryFlatlist: {
        width: '90%',
    },
    menuText: {
        fontFamily: 'OpenSans-regular',
        fontSize: 14
    }
})