
// modules
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native'

// components
import { JobDescriptionContextProvider } from './components/context/JobDescriptionContextProvider';
import JobTitle from './modules/job-title';
import CompanyTypes from './modules/company-types';
import { useJobDescriptionContext } from './components/context/JobDescriptionContext';
import NavigationFooter from './components/navigation-footer';
import HomeHeader from '../../components/home-header';
import WishList from './modules/wish-list';
import Stepper from './components/stepper'
import PageContainer from '../../components/page-container';

const JobDescription = () => {

  // Attributes
  const Stack = createStackNavigator()

  return (
    <JobDescriptionContextProvider>
      <PageContainer>
        <HomeHeader>
          <Stepper />
        </HomeHeader>
        <Stack.Navigator headerMode='none' initialRouteName='JobTitle'>
          <Stack.Screen name='JobTitle' component={JobTitle} />
          <Stack.Screen name='CompanyTypes' component={CompanyTypes} />
          <Stack.Screen name='WishList' component={WishList} />
        </Stack.Navigator>
        <NavigationFooter />
      </PageContainer>
    </JobDescriptionContextProvider >
  )
}

export default JobDescription;