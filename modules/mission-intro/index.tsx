import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// components
import JobDescriptionIntro from './modules/job-description-intro';
import PageContainer from '../../components/page-container';
import HomeHeader from '../../components/home-header';
import PageTitle from '../../components/page-title';
import PageBody from '../../components/page-body';
import ThreeJobOffersIntro from './modules/3-job-offers-intro';

interface Props {
  type: string,
  next: string
}

const MissionIntro = ({ type, next }: Props) => {

  // Attributes
  const navigation = useNavigation()

  // Handlers
  function handleOnPress() {
    navigation.navigate(type, { screen: next })
  }

  function renderIntro() {
    switch (type) {
      case 'jobdescription':
        return <JobDescriptionIntro />;
      case 'threejoboffers':
        return <ThreeJobOffersIntro />;
    }
  }
  return (
    <PageContainer>
      <HomeHeader icon='dashboard'>
        <PageTitle text='Intro' />
      </HomeHeader>
      <PageBody>
        <View>
          {renderIntro()}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleOnPress}>
            <Text style={{ color: 'white' }}>Start</Text>
          </TouchableOpacity>
        </View>
      </PageBody>
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