import React, { useState, useEffect} from 'react';
import { Block, Text, Button } from 'galio-framework';
import { withNavigation } from '@react-navigation/compat';
import { StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { ListItem } from "react-native-elements";
import argonTheme from "../constants/argonTheme";
import { TouchableOpacity } from "react-native-gesture-handler";
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

function NerdList() {
  const navigation = useNavigation();
  function renderItem({item}) {
      return (
      <TouchableOpacity
      onPress={() => navigation.navigate('Profile2', {
        id: item.id
      })}
      >
        <ListItem 
          title={
            <Block>
            <Text style={styles.names}>
            {item.firstName} {item.lastName}
            </Text>
          </Block>
          }
          subtitle={
            <Block>
              <Text style={styles.descriptions}>
              {item.descriptors[0]} {item.descriptors[1]} {item.descriptors[2]}
              </Text>
            </Block>
          }
          leftAvatar={{ source: { uri: item.imgUrl } }}
          bottomDivider
          chevron
              />
      </TouchableOpacity>
      
      );
  }  
    const ref = firestore().collection('nerds');
    const [ nerd, setNerd ] = useState('');
    const [ loading, setLoading ] = useState(true);
    const [ nerdList, setNerdList ] = useState([]);

    async function addNerd() {
        await ref.add({
            name: nerd
        });
        setNerd('');
    }

    useEffect(() => {
        return ref.onSnapshot((querySnapshot) => {
            const list = [];
            querySnapshot.forEach(doc => {
                const { firstName, lastName, imgUrl, descriptors } = doc.data();
                list.push({
                    id: doc.id,
                    firstName,
                    lastName,
                    imgUrl,
                    descriptors,
                });
            });
            setNerdList(list);

            if (loading) {
                setLoading(false);
                return (<ActivityIndicator/>)
            }
        });
    }, []);
    return (
        <Block>
            <FlatList 
            data={nerdList}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            />

        </Block>
    );
}

const styles = StyleSheet.create({
    names: {
      fontFamily: 'OpenSans-bold',
      color: argonTheme.COLORS.TEXT,
    },
  
    descriptions: {
      fontFamily: 'OpenSans-regular',
      color: argonTheme.COLORS.TEXT,
    },
  });  

export default withNavigation(NerdList);