
// modules
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native'

// components
import { JobDescriptionContextProvider } from './components/context/JobDescriptionContextProvider';
import JobTitle from './modules/job-title';
import CompanyTypes from './modules/company-types';
import NavigationFooter from './components/navigation-footer';
import WishList from './modules/wish-list';
import PageContainer from '../../components/page-container';


const JobDescription = () => {

  // Attributes
  const Stack = createStackNavigator()

  return (
    <JobDescriptionContextProvider>
      <PageContainer>
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