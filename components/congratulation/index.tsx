// modules
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HomeHeader from '../home-header';
import PageContainer from '../page-container';
import PageBody from '../page-body';

const Congratulation = () => {
  return (
    <>
      <PageContainer>
        <HomeHeader icon='dashboard' />
        <PageBody>
          <View style={styles.container}>
            <Text style={styles.text}>
              Congratulations !
              💪
      </Text>
          </View>
        </PageBody>
      </PageContainer>
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