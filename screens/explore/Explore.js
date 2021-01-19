import React from 'react';
import {Block, Text} from 'galio-framework';
import {StyleSheet, FlatList, ActivityIndicator, View} from 'react-native';
import CategoryCard from '../../components/Explore/CategoryCard';
import argonTheme from '../../constants/argonTheme';
import nerdProfiles from '../../constants/nerdProfiles';
import {selectCategory} from '../../constants/Categories';
import FeedArticleCard from '../../components/Feed/FeedArticleCard';
import FeedVideoCard from '../../components/Feed/FeedVideoCard';
import FeedPodcastCard from '../../components/Feed/FeedPodcastCard';
import {BottomMetrics} from '../../components/Feed/BottomMetrics';

export default function Explore() {
  function renderCategories({item}) {
    const clr = selectCategory(item);
    return (
      <CategoryCard
        style={{
          width: 150,
          height: 100,
          backgroundColor: clr,
          marginRight: 8,
          marginTop: 10,
          marginBottom: 10,
        }}>
        {item}
      </CategoryCard>
    );
  }

  function renderTrending({item}) {
    const contentType = item.contentType;
    switch (contentType) {
      case 'article':
        return (
          <Block>
            <FeedArticleCard item={item} />
            <BottomMetrics item={item} />
          </Block>
        );
      case 'video':
        return (
          <Block>
            <FeedVideoCard item={item} />
            <BottomMetrics item={item} />
          </Block>
        );
      case 'podcast':
        return (
          <Block>
            <FeedPodcastCard item={item} />
            <BottomMetrics item={item} />
          </Block>
        );
      default:
        return <FeedArticleCard item={item} />;
    }
  }

  const flatListHeader = (
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
      </Block>
    </Block>
  );

  return (
    <Block style={styles.background}>
      <FlatList
        style={styles.trendingFlatlist}
        data={nerdProfiles.bios[0].videos}
        renderItem={renderTrending}
        ListHeaderComponent={flatListHeader}
      />
    </Block>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: argonTheme.COLORS.WHITE,
    width: '100%',
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
    alignSelf: 'center',
  },
  categoriesFlatlist: {
    width: '95%',
    alignSelf: 'flex-end',
    marginTop: '3%',
  },
  trendingFlatlist: {
    width: '100%',
    alignSelf: 'center',
  },
});
