import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MissionHeader from './components/mission-header';
import PageContainer from '../../components/page-container';
import { StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MissionIntro from '../mission-intro';
import Table from './modules/table';

const ThreeJobOffers = () => {
  console.log('threjobs')
  // Attributes
  const Stack = createStackNavigator()

  // Components
  const Introduction = () => {
    return (
      <MissionIntro type='threejoboffers' next='table' />
    )
  }

  return (
    <PageContainer>
      <Stack.Navigator initialRouteName='introduction' headerMode='none'>
        <Stack.Screen name='introduction' component={Introduction} />
        <Stack.Screen name='table' component={Table} />
      </Stack.Navigator>
    </PageContainer>
  )
}

export default ThreeJobOffers;