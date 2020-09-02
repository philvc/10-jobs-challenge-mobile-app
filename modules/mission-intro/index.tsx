import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// components
import JobDescriptionIntro from './modules/job-description-intro';
import PageContainer from '../../components/page-container';

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
    <PageContainer>
      <View style={{ height: '100%' }}>
        <View>
          {renderIntro()}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleOnPress}>
            <Text>Start</Text>
          </TouchableOpacity>
        </View>
      </View>
    </PageContainer>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 10,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'rgba(0,0,0, 0.5)',
    borderRadius: 16,
    padding: 15,
    boxSizing: 'border-box',
    marginRight: 5,
    width: 200,
    alignSelf: 'center',
  },
  body: {
    display: 'flex',
    height: '100%',
    justifyContent: 'space-between',

  }
})

export default MissionIntro;