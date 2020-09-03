import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ThreeJobOffersIntro = () => {

  return (
    <>
      <View style={styles.paragraphContainer}>
        <View style={styles.paragraph}>
          <Text>
            Post 3 new job offers to apply to !
        </Text>
        </View>
        <View style={styles.paragraph}>
          <Text>
            Step 1: Together, you have to fill the table with 3 new job offers.
        </Text>
        </View>
        <View style={styles.paragraph}>
          <Text>
            Final step: The job seeker has to validate the results.
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
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
  },
  paragraphContainer: {
    marginBottom: 20
  }
})

export default ThreeJobOffersIntro;