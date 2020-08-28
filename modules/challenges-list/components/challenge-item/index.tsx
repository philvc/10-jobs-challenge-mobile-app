// modules
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Challenge from '../../../challenge';


const ChallengeItem = ({ challenge }: any) => {

  // navigation 
  const navigation = useNavigation()

  // handlers
  function handleClick() {
    navigation.navigate('Challenge')
  }
  return (
    <View>
      <TouchableOpacity onPress={handleClick}>
        <View>
          <Text>{challenge.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ChallengeItem;