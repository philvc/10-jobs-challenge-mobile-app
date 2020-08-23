import React from 'react';
import { View, Text } from 'react-native';

// context
import { useJobDescriptionContext } from '../context/JobDescriptionContext';

const Header = () => {

  const { data, dispatch } = useJobDescriptionContext()
  return (
    <View>
      <Text> {data.step} / Step </Text>
    </View>
  )
}

export default Header;