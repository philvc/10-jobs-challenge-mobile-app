// modules
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Dashboard = () => {

  // Attributes
  const navigation = useNavigation()

  // Handlers
  function handleOnPress(screen: string) {
    navigation.navigate(screen)
  }


  return (
    <View>
      <View>
        <Text>Dashboard</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => handleOnPress('JobDescription')}>
          <Text>1</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  missionCard: {
    borderRadius: 12,
    borderColor: 'rgba(0,0,0, 0.5)',

  },

})

export default Dashboard;