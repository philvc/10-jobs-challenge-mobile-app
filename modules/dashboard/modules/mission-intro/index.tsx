import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// components
import JobDescriptionIntro from './modules/job-description-intro';

const MissionIntro = ({ type = 'jobdescription' }: any) => {

  // Attributes
  const navigation = useNavigation()

  // Handlers
  function handleOnPress() {
    navigation.navigate(type)
  }

  function renderIntro() {
    switch (type) {
      case 'jobdescription':
        return <JobDescriptionIntro />
    }
  }
  return (
    <View>
      {renderIntro()}
      <View>
        <TouchableOpacity onPress={handleOnPress}>
          <Text>Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default MissionIntro;