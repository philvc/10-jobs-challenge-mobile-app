
// modules
import React, { createContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native'

// components
import { JobDescriptionContextProvider } from './components/context/JobDescriptionContextProvider';
import JobTitle from './modules/job-title';
import CompanyTypes from './modules/company-types';
import NavigationFooter from './components/navigation-footer';
import WishList from './modules/wish-list';
import PageContainer from '../../components/page-container';
import MissionIntro from '../mission-intro';
import { useApolloClient, gql } from '@apollo/client';

const JobDescription = () => {

  // Attributes
  const Stack = createStackNavigator()
  const client = useApolloClient()
  const mission = client.readFragment({
    id: 'MissionMobile:5f6aec9716c90440435d6e45',
    fragment: gql`
      fragment JobDescMission on MissionMobile {
        id
        type
        step
        state
        description
        environment
        wishList
        gameId
        state
      }
    `
  })

  const Introduction = () => {
    return <MissionIntro type='jobdescription' next='JobTitle' />
  }

  function renderInitialComponent() {
    if (mission.state === 'pending' || mission.state === 'completed') {
      return 'JobTitle'
    } else {
      return 'Introduction'
    }
  }

  return (
    <JobDescriptionContextProvider>
      <PageContainer>
        <Stack.Navigator headerMode='none' initialRouteName={renderInitialComponent()}>
          <Stack.Screen name='JobTitle' component={JobTitle} />
          <Stack.Screen name='CompanyTypes' component={CompanyTypes} />
          <Stack.Screen name='WishList' component={WishList} />
          <Stack.Screen name='Introduction' component={Introduction} />
        </Stack.Navigator>
      </PageContainer>
    </JobDescriptionContextProvider >
  )
}

export default JobDescription;