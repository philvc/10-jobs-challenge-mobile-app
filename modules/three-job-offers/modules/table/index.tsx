import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import MissionHeader from '../../components/mission-header'

const Table = () => {

  // Queries


  function handleOnChange() {

  }

  return (
    <View>
      <MissionHeader />
      <View>
        <TextInput onChangeText={handleOnChange} />
      </View>
    </View>
  )
}

export default Table;