import React from 'react';
import { View, Text } from 'react-native'
import { useJobDescriptionContext } from '../context/JobDescriptionContext';

const Stepper = () => {
  const { data } = useJobDescriptionContext()
  return (
    <>
      <Text>{data.step + 1} / 3</Text>
    </>
  )
}

export default Stepper;