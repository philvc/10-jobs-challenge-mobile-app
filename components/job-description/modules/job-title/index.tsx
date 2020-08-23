
// modules
import React from 'react';
import { TextInput, View } from 'react-native';

// components
import Header from '../../components/header';
import NavigationFooter from '../../components/navigation-footer';


const JobTitle = () => {
  return (
    <View>
      <Header />
      <TextInput placeholder='Write job title...' />
      <NavigationFooter />
    </View>
  )
}

export default JobTitle;