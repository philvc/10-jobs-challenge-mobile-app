import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface IPageTitle {
  text: string
}

const PageTitle = ({ text }: IPageTitle) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

export default PageTitle

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  text: {
    fontSize: 25,
    textAlign: 'center',

  }
})