// modules
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

// style
import './style.css';
import { useJobDescriptionContext } from '../context/JobDescriptionContext';
import { actions } from '../context/reducer';

const NavigationFooter = () => {

  // Attributes
  const { data, dispatch } = useJobDescriptionContext()
  const { step } = data;
  // Handlers
  function handleOnPress(value: number) {
    dispatch({ type: actions.stepChanged, payload: value })
  }
  return (
    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      <TouchableOpacity onPress={() => handleOnPress(step - 1)}>
        <Text>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleOnPress(step + 1)}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

export default NavigationFooter;