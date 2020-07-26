
import React, {useState, useEffect} from 'react';
import ApolloClient, {gql} from 'apollo-boost';
import { StyleSheet, View, ActivityIndicator, FlatList } from 'react-native';
import { Block, Text } from 'galio-framework';
import { Button } from 'react-native-elements';
import Icon from '../../components/Icon';
import argonTheme from '../../constants/argonTheme';
import FeedArticleCard from '../../components/Feed/FeedArticleCard';

// AWS RDS postgres database endpoint
const postGresURI = 'http://ec2-13-59-107-152.us-east-2.compute.amazonaws.com/v1/graphql';
// Creating Hasura graphql API server object with postgres endpoint
const client = new ApolloClient({
  uri: postGresURI,
  headers: {'Authorization': 'Bearer eyJraWQiOiJ4N0Z4V2tiYTRDaUdQN2ROOHZTdU5TSlpXcHB0OTNrZ25YWTF2RVoralhrPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiSjF6eVUwTkJ0bDdkckRjQ3ZnWENYdyIsInN1YiI6IjNkMGIzNTgwLTUzYWItNDMzYy05NmU1LTFlN2MyYjI1MmUwZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJodHRwczpcL1wvaGFzdXJhLmlvXC9qd3RcL2NsYWltcyI6IntcIngtaGFzdXJhLXVzZXItaWRcIjpcIjNkMGIzNTgwLTUzYWItNDMzYy05NmU1LTFlN2MyYjI1MmUwZVwiLFwieC1oYXN1cmEtZGVmYXVsdC1yb2xlXCI6XCJ1c2VyXCIsXCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzXCI6W1widXNlclwiXX0iLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0yLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMl9jZFQ5Z0pINngiLCJjb2duaXRvOnVzZXJuYW1lIjoiZmxleGhlZGdlIiwiYXVkIjoiYmRjODZzZWdzbG42YnJiOG9lOXBiY2hoZCIsImV2ZW50X2lkIjoiZDUwODFjOGEtODFhZS00NjQ3LWJjZTAtY2I5MGI3Y2UyZmY5IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE1OTI5MzE5NDksImV4cCI6MTU5MjkzNTU0OSwiaWF0IjoxNTkyOTMxOTQ5LCJlbWFpbCI6InBhdWxzdXR0b25AbmVyZGh1Yi5pbyJ9.aGihTCGWJ4kI4TkVBIAGmuxRDwfOS0Ha7YoTWT0sf5aK-yxOV8WeP3hxxXclH62KNfLWDM04jjw0Jp9qS7o9j8SO-4fIVCBs7eo6dv1NMeVTibXMWWR1_Tdud7Q8uPY_hZAYa6Q0D574kFg6jD4sl8zEq2wphMBacx30qk0iSaCV9IzmmUPgCOJJp7JZB8eCfdb6kB57I7upigq5gkt7JXA_wjeksx0RJ4Ak3xIdVrfGW9NMJKe-czN5gIJrGs9xCcEp9sZcpnMAHgW5AgHYghOSd8hUoHJlpqbI2xNXlU8TU-rv8SkE4UVVVCrv4qmAMWb-6usRKOqN_ezEcsv__A'}
});

export default function FeedArticles() {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    requestHeadlines()
  }, [])
  
  const requestHeadlines = () => {
      client
      .query({
        query: gql`
        {
          articles(limit: 20)
          {
            author
            title
            urltoimage
            content
            description
            id
            publishedat
            sourcename
            url
          }
        }
        `
      })
      .then(response => {
        console.log('RESPONSE ==>', response)
        setLoading(response.loading)
        setArticles(response.data.articles)
      })
      .catch(error => {
        console.log('ERROR ==>', error)
      })
  }

  function renderArticleItem({item}) {
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
            >{item.publishedat}
            </Text>
            </Block>
          </Block>
      );
    }

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color={argonTheme.COLORS.ACTIVE}/>
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
        <FlatList
        data={articles}
        renderItem={renderArticleItem}
        />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%'
  },
  header: {
    marginTop: 50,
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  headerText: {
    marginBottom: 5,
    fontSize: 30,
    fontWeight: 'bold'
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20
  }
})