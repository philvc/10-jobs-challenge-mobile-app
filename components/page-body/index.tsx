import React from 'react';
import { View, StyleSheet } from 'react-native';

const PageBody = ({ children }: any) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 8,
    marginTop: 30,
  }
})

export default PageBody 