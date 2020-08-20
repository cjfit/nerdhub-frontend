import React, {useState} from 'react';
import argonTheme from '../../constants/argonTheme';
import { Block, Text } from 'galio-framework';
import { StyleSheet } from "react-native";
import { Button } from 'react-native-elements';
import Icon from '../Icon';

function BottomMetrics() {
    return (
        <Block style={styles.bottomMetricsContainer}>
              <Block style={styles.commentLikeContainer}>
                <Button 
                title='1,357'
                type='clear'
                titleStyle={styles.buttonText}
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
                titleStyle={styles.buttonText}
                icon={
                  <Icon
                  name='comment-outline'
                  family='material-community'
                  size={14}
                  style={{marginTop: '10%'}}
                  />
                }
                />
              </Block>
              <Text
              style={styles.timePostedText}
              >4 days ago
              </Text>
            </Block>
    )
}

const styles = StyleSheet.create({
    bottomMetricsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        alignSelf: 'center',
      },
      commentLikeContainer: {
        flexDirection: 'row'
      },
      buttonText: {
        fontFamily: 'OpenSans-bold',
        fontSize: 14,
        color: argonTheme.COLORS.TEXT
      },
      timePostedText: {
        fontFamily: 'OpenSans-regular',
        fontSize: 14,
        color: argonTheme.COLORS.MUTED
      }
})


export {BottomMetrics};