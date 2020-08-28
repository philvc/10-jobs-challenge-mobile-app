// modules
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Congratulation = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Congratulations !
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    minWidth: '100%',
    minHeight: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },
  text: {
    fontSize: 26
  }
})

export default Congratulation;