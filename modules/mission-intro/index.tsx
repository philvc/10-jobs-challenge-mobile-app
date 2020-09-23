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
import { useMutation } from '@apollo/client';
import { UPDATE_JOB_DESCRIPTION_SERVER } from '../../graphql/mutations/server/updateJobDescription';

interface Props {
  type: string,
  next: string
}

const MissionIntro = ({ type, next }: Props) => {

  // Attributes
  const navigation = useNavigation()

  // Mutation
  const [updateJobDescription] = useMutation(UPDATE_JOB_DESCRIPTION_SERVER, {
    onCompleted() {
      navigation.navigate(type, { screen: next })
    }
  })

  // Handlers
  function handleOnPress() {
    updateJobDescription({
      variables: {
        id: '5f6aec9716c90440435d6e45',
        description: '',
        wishList: '',
        gameId: '',
        environment: '',
        state: 'pending',
      }
    })
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
        <View>
          <TouchableOpacity onPress={handleOnPress}>
            <Text style={styles.buttonContainer}>Start</Text>
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
    white: 'white'
  },
  body: {
    display: 'flex',
    height: '100%',
    justifyContent: 'space-between',

  }
})

export default MissionIntro;