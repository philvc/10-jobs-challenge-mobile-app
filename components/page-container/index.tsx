import React from 'react';
import { View, StyleSheet } from 'react-native';

const PageContainer = ({ children }: any) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
    position: "relative",
    flex: 1,
  }
})

export default PageContainer;