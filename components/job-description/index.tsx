
// modules
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// components
import { JobDescriptionContextProvider } from './components/context/JobDescriptionContextProvider';
import JobTitle from './modules/job-title';

const JobDescription = () => {

  const Stack = createStackNavigator()

  return (
    <JobDescriptionContextProvider>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name='jobTitle' component={JobTitle} />
      </Stack.Navigator>
    </JobDescriptionContextProvider>
  )
}

export default JobDescription;