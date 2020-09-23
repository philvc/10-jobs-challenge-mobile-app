import { View, Text } from 'react-native';
import React from 'react';

const SubHeader = () => {
  return (
    <View>
      <Text style={{ textAlign: 'center' }}>Completed !</Text>
      <Text style={{ textAlign: 'center' }}>Even when completed, you can still update your answers.</Text>
      <Text style={{ textAlign: 'center' }}>To save your updates you have to click on next or back</Text>
    </View>
  )
}

export default SubHeader
