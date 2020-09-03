// modules
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HomeHeader from '../home-header';

const Congratulation = () => {
  return (
    <>
      <HomeHeader icon='dashboard' />
      <View style={styles.container}>
        <Text style={styles.text}>
          Congratulations !
          💪
      </Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    minWidth: '100%',
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    marginTop: 200,

  },
  text: {
    fontSize: 26
  }
})

export default Congratulation;