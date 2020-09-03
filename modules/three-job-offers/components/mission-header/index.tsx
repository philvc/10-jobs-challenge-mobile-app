import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import NavigationIcon from '../../../../components/navigation-icon';


const MissionHeader = () => {

  // Attributes

  return (
    <View style={styles.container}>
      <NavigationIcon icon='dashboard' />
      <Text style={{ fontSize: 16 }}>3 job offers</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default MissionHeader