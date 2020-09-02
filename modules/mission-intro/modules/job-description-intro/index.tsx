import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PageTitle from '../../../../components/page-title';
import HomeHeader from '../../../../components/home-header';
import PageContainer from '../../../../components/page-container';

const JobDescriptionIntro = () => {

  return (
    <>
      <HomeHeader>
        <PageTitle text='Intro' />
      </HomeHeader>
      <View style={styles.paragraphContainer}>
        <View style={styles.paragraph}>
          <Text>
            You are about to start the 'Job Description' mission. The goal of this mission is to describe your new wanted job.
        </Text>
        </View>
        <View style={styles.paragraph}>
          <Text>
            You have to describe the job search key words you are looking for, the work environment and the companies you would like to apply to if you already have something in your mind.
        </Text>
        </View>
        <View style={styles.paragraph}>
          <Text>
            It will help your friends who joined this 10 jobs challenge to find you better job offers.
        </Text>
        </View>
      </View>
    </>
  )

}

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  paragraph: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
  },
  paragraphContainer: {
    marginBottom: 30
  }
})

export default JobDescriptionIntro