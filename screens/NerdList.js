import React from 'react';
import { Block, Text } from 'galio-framework';
import { withNavigation } from '@react-navigation/compat';
import { StyleSheet, FlatList, ActivityIndicator, View } from "react-native";
import { ListItem } from "react-native-elements";
import argonTheme from "../constants/argonTheme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import nerdProfiles from '../constants/nerdProfiles';

function NerdList() {
  const navigation = useNavigation();
  function renderItem({item}) {
      return (
      <TouchableOpacity
      onPress={() => navigation.navigate('Profile', {
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
   
    return (
      <View style={styles.background}>
        <Block>
            <FlatList 
            data={nerdProfiles.bios}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            />

        </Block>
      </View>
    );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: argonTheme.COLORS.WHITE
  },
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