
// modules
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native'

// components
import { JobDescriptionContextProvider } from './components/context/JobDescriptionContextProvider';
import JobTitle from './modules/job-title';
import CompanyTypes from './modules/company-types';
import { useJobDescriptionContext } from './components/context/JobDescriptionContext';
import NavigationFooter from './components/navigation-footer';
import HomeHeader from '../../components/home-header';
import WishList from './modules/wish-list';
import Stepper from './components/stepper'

const JobDescription = () => {

  // Attributes
  const Stack = createStackNavigator()
  const { data } = useJobDescriptionContext()

  console.log('steep value', data.step)
  return (
    <JobDescriptionContextProvider>
      <HomeHeader>
        <Stepper />
      </HomeHeader>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name='JobTitle' component={JobTitle} />
        <Stack.Screen name='CompanyTypes' component={CompanyTypes} />
        <Stack.Screen name='WishList' component={WishList} />
      </Stack.Navigator>
      <NavigationFooter />
    </JobDescriptionContextProvider >
  )
}

export default JobDescription;