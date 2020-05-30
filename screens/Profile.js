import React, { useState } from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  Platform
} from "react-native";
import { Block, Text, theme} from "galio-framework";
import Icon from '../components/Icon'

import Button from "../components/Button";
import argonTheme from "../constants/argonTheme";
import { HeaderHeight } from "../constants/utils";
import { FlatList, TouchableWithoutFeedback } from "react-native-gesture-handler";
import nerdProfiles from "../constants/nerdProfiles";
import ArticleCard from "../components/ArticleCard";
import VideoCard from "../components/VideoCard";
import PodcastCard from '../components/PodcastCard';
import ViewMoreText from 'react-native-view-more-text';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get("screen");
const thumbMeasure = (width - 48 - 32) / 3;

function Profile(props) {
  const navigation = useNavigation();
  renderVideoItem = ({item}) => {
    return(
      <Block style={{ marginRight: theme.SIZES.BASE }}>
        <TouchableWithoutFeedback>
        <VideoCard
          item={item}
          imageStyle={{ width: "auto", height: 94 }}
          style={{ width: width / 3.75}}
        />
        </TouchableWithoutFeedback>
      </Block>
    );
  };

  renderArticleItem = ({item}) => {
    return(
      <Block style={{ marginRight: theme.SIZES.BASE }}>
        <TouchableWithoutFeedback>
        <ArticleCard
          item={item}
          imageStyle={{ width: "auto", height: 94 }}
          style={{ width: width / 3.75}}
        />
        </TouchableWithoutFeedback>
      </Block>
    );
  };

  renderPodcastItem = ({item}) => {
    return (
      <Block style={{ marginRight: theme.SIZES.BASE }}>
        <TouchableWithoutFeedback>
        <PodcastCard
          item={item}
          imageStyle={{ width: "auto", height: 94 }}
          style={{ width: width / 3.75}}
        />
        </TouchableWithoutFeedback>
      </Block>
    );
  }

  function renderViewMore(onPress) {
    return (
      <Text onPress={onPress} style={
        { color: argonTheme.COLORS.ACTIVE, fontSize: 14, textAlign: 'center'}}
      >
      View More
      </Text>
    )
  }

  function renderViewLess(onPress) {
    return (
      <Text onPress={onPress} style={
        { color: argonTheme.COLORS.ACTIVE, fontSize: 14, textAlign: 'center'}}
      >
      View Less
      </Text>
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
  
    const {id} = props.route.params;
    return (
      <Block flex style={styles.profile}>
        <Block flex style={styles.violet}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ width, marginTop: "25%" }}
            >
              <Block flex style={styles.profileCard}>
                <Block middle style={styles.avatarContainer}>
                  <Image
                    source={{uri: nerdProfiles.bios[0].imgUrl}}
                    style={styles.avatar}
                    backgroundColor={argonTheme.COLORS.MUTED}
                  />
                </Block>
                <Block style={styles.info}>
                  <Block
                    middle
                    row
                    space="evenly"
                    style={{ marginTop: 20, paddingBottom: 24 }}
                  >
                    <Button
                      style={{ backgroundColor: argonTheme.COLORS.ACTIVE, width: 300, height: 30 }}
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
                  <Block row space="between">
                    <Block middle>
                      <Text
                        size={18}
                        color={argonTheme.COLORS.TEXT}
                        style={{ marginBottom: 4, fontFamily: 'OpenSans-bold' }}
                      >
                        2K
                      </Text>
                      <Text style={{ fontFamily: 'OpenSans-regular' }} size={12} color={argonTheme.COLORS.TEXT}>Followers</Text>
                    </Block>
                    <Block middle>
                      <Text
                        color={argonTheme.COLORS.TEXT}
                        size={18}
                        style={{ marginBottom: 4, fontFamily: 'OpenSans-bold' }}
                      >
                        10
                      </Text>
                      <Text style={{ fontFamily: 'OpenSans-regular' }} size={12} color={argonTheme.COLORS.TEXT}>Content</Text>
                    </Block>
                  </Block>
                </Block>
                <Block flex>
                  <Block middle style={styles.nameInfo}>
                    <Text style={{ fontFamily: 'OpenSans-regular' }} size={24} color={argonTheme.COLORS.TEXT} numberOfLines={1}>
                      {id}
                    </Text>
                    <Text size={16} color={argonTheme.COLORS.LIGHT_TEXT} style={{ marginTop: 10, fontFamily: 'OpenSans-regular' }}>
                      {nerdProfiles.bios[0].location}
                    </Text>
                  </Block>
                  <Block style={styles.categories}>
                    <Button small style={{ backgroundColor: argonTheme.COLORS.RACKLEY }}>Math</Button>
                    <Button small style={{ backgroundColor: argonTheme.COLORS.RACKLEY }}>Finance</Button>
                    <Button small style={{ backgroundColor: argonTheme.COLORS.RACKLEY }}>Physics</Button>
                  </Block>
                  <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                    <Block style={styles.divider} />
                  </Block>
                    <ViewMoreText
                      numberOfLines={3}
                      renderViewMore={renderViewMore}
                      renderViewLess={renderViewLess}
                    >
                    <Text
                      size={16}
                      color={argonTheme.COLORS.LIGHT_TEXT}
                      style={{ textAlign: "center", fontFamily: 'OpenSans-regular' }}
                    >
                      {nerdProfiles.bios[0].description}
                    </Text>
                    </ViewMoreText>
                    <Block
                      row
                      style={{ paddingVertical: 14 }}
                      space="between"
                    >
                      <Block flex flexDirection='row'>
                        <Icon
                          name='youtube'
                          family='antdesign'
                          size={25}
                          color={argonTheme.COLORS.ACTIVE}
                        />
                        <Text color={argonTheme.COLORS.TEXT} 
                        style={{ marginTop: 3, fontFamily: 'OpenSans-bold', fontSize: 16, marginLeft: '2%' }}>
                        YouTube Appearances
                        </Text>
                      </Block>
                        <Button
                          small
                          color="transparent"
                          textStyle={{ color: argonTheme.COLORS.ACTIVE, fontSize: 14 }}
                          onPress={() => navigation.navigate('ViewAll', {
                          type: 'videos'
                          })}
                        >
                        View all
                        </Button>
                    </Block>
                    <Block style={{ marginHorizontal: theme.SIZES.BASE }}>
                      <FlatList 
                        style={styles.flatlist}
                        data={nerdProfiles.bios[0].videos}
                        renderItem={renderVideoItem}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                      />
                    </Block>
                    <Block
                      row
                     style={{ paddingVertical: 14 }}
                     space="between"
                    >
                      <Block flex flexDirection='row'>
                        <Icon
                          name='newspaper-o'
                          family='font-awesome'
                          size={23}
                          color={argonTheme.COLORS.DEFAULT}
                          style={{marginTop: '1%'}}
                        />
                        <Text 
                          color={argonTheme.COLORS.TEXT} 
                          style={{ marginTop: 3, fontFamily: 'OpenSans-bold', fontSize: 16, marginLeft: '2%' }}>
                        Articles Written
                        </Text>
                    </Block>
                      <Button
                        small
                        color="transparent"
                        textStyle={{ color: argonTheme.COLORS.ACTIVE, fontSize: 14 }}
                        onPress={() => navigation.navigate('ViewAll', {
                          type: 'articles'
                        })}
                      >
                      View all
                      </Button>
                    </Block>
                    <Block style={{ marginHorizontal: theme.SIZES.BASE }}>
                      <FlatList 
                        style={styles.flatlist}
                        data={nerdProfiles.bios[0].articles}
                        renderItem={renderArticleItem}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                      />
                    </Block>
                    <Block
                      row
                      style={{ paddingVertical: 14 }}
                      space="between"
                    > 
                      <Block flex flexDirection='row'>
                        <Icon
                        name='podcast'
                        family='material-community'
                        size={25}
                        color={argonTheme.COLORS.RUSSIAN_VIOLET}
                        />
                        <Text 
                          color={argonTheme.COLORS.TEXT} 
                          style={{ marginTop: 3, fontFamily: 'OpenSans-bold', fontSize: 16, marginLeft: '2%' }}>
                        Podcast Appearances
                        </Text>
                      </Block>
                      <Button
                        small
                        color="transparent"
                        textStyle={{ color: argonTheme.COLORS.ACTIVE, fontSize: 14 }}
                      >
                      View all
                      </Button>
                    </Block>
                    <Block style={{ marginHorizontal: theme.SIZES.BASE }}>
                      <FlatList 
                        style={styles.flatlist}
                        data={nerdProfiles.bios[0].podcasts}
                        renderItem={renderPodcastItem}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                      />
                    </Block>
                      <Block
                        row
                        style={{ paddingVertical: 14 }}
                        space="between"
                      >
                      <Block flex flexDirection='row'>
                        <Icon
                        name='microphone-alt'
                        family='font-awesome-5'
                        size={25}
                        color={argonTheme.COLORS.MUTED}
                        />
                        <Text 
                          color={argonTheme.COLORS.TEXT} 
                          style={{ marginTop: 3, fontFamily: 'OpenSans-bold', fontSize: 16, marginLeft: '2%' }}>
                          Live Appearances
                        </Text>
                      </Block>
                        <Button
                          small
                          color="transparent"
                          textStyle={{ color: argonTheme.COLORS.ACTIVE, fontSize: 14 }}
                        >
                        View all
                        </Button>
                    </Block>
                    <Text style={{fontFamily: 'OpenSans-regular', color: argonTheme.COLORS.MUTED}}>
                      No live appearances scheduled at the moment...
                    </Text>
                </Block>
              </Block>
              <Block style={{ marginBottom: 25 }}/>
            </ScrollView>
        </Block>
      </Block>
    );
  
}

const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
    // marginBottom: -HeaderHeight * 2,
    flex: 1
  },
  profileContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1
  },
  profileBackground: {
    width: width,
    height: height / 2
  },
  profileCard: {
    // position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 65,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: argonTheme.COLORS.OFF_WHITE_BACKGROUND,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2
  },
  info: {
    paddingHorizontal: 40
  },
  avatarContainer: {
    position: "relative",
    marginTop: -80
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 0
  },
  nameInfo: {
    marginTop: 35
  },
  divider: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#E9ECEF"
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure
  },
  categories: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  violet: {
    backgroundColor: argonTheme.COLORS.DEFAULT
  }
});

export default Profile;
