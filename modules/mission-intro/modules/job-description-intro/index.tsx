import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const JobDescriptionIntro = () => {

  return (
    <>
      <View style={styles.paragraphContainer}>
        <View style={styles.paragraph}>
          <Text style={styles.paragraphText}>
            You are about to start the 'Job Description' mission. The goal of this mission is to describe your new wanted job.
        </Text>
        </View>
        <View style={styles.paragraph}>
          <Text style={styles.paragraphText}>
            You have to describe the job search key words you are looking for, the work environment and the companies you would like to apply to if you already have something in your mind.
        </Text>
        </View>
        <View style={styles.paragraph}>
          <Text style={styles.paragraphText}>
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
    marginBottom: 20,
  },
  paragraphText: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
  },
  paragraphContainer: {
    marginBottom: 20,
  }
})

export default JobDescriptionIntro