import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// context
import { useJobDescriptionContext } from '../context/JobDescriptionContext';



const Header = () => {

  const { data, dispatch } = useJobDescriptionContext()
  return (
    <View style={styles.container}>
      <Text> {data.step + 1} / 3 </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '65px'
  }
})

export default Header;