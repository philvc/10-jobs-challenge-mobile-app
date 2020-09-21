// modules
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const ChallengeItem = ({ challenge }: any) => {
  // navigation 
  const navigation = useNavigation()

  // handlers
  function handleClick() {
    localStorage.setItem('selectedChallenge', JSON.stringify(challenge))
    navigation.navigate('dashboard')
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>{challenge.title}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={handleClick}>
          <Image
            source={require('./assets/arrow-right.svg')}
            style={{ width: 20, height: 10 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 15,
    borderColor: 'rgba(0,0,0, 0.5)',
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 10,
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

export default ChallengeItem;