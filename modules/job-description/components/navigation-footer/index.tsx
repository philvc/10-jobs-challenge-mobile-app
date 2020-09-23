// modules
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

// components
import { useJobDescriptionContext } from '../context/JobDescriptionContext';
import { actions } from '../context/reducer';

// style
import { useNavigation } from '@react-navigation/native';
import { useMutation } from '@apollo/client';

// graphql
import { UPDATE_JOB_DESCRIPTION_SERVER } from '../../../../graphql/mutations/server/updateJobDescription'
import JobDescription from '../..';
import { CREATE_MISSION } from '../../../../graphql/mutations/server/createMissionServer';

const NavigationFooter = () => {

  // Attributes
  const { data: jobDescription, dispatch } = useJobDescriptionContext()
  const { step } = jobDescription;
  const { wishList, jobTitle, companyTypes } = jobDescription
  const navigation = useNavigation();
  const game = JSON.parse(localStorage.getItem('selectedChallenge') || '')
  const enumRoute = ['JobTitle', 'CompanyTypes', 'WishList', 'Congratulation']

  // Mutations
  const [updateJobDescription] = useMutation(UPDATE_JOB_DESCRIPTION_SERVER, {
    onCompleted() {
      // TODO congratulation check your dashboard you have unlocked a new mission
      // if clicked on save go to congratulation page
      if (step === 3 && jobDescription.state === 'pending') {
        navigation.navigate('congratulation')
      }
    }
  })

  const [createMission] = useMutation(CREATE_MISSION)


  // Handlers
  function handleOnPress(value: number) {

    // save mission update
    updateJobDescription({
      variables: {
        id: '5f6aec9716c90440435d6e45',
        description: jobTitle,
        wishList: wishList,
        gameId: game.id,
        environment: companyTypes,
        state: 'completed',
      }
    })

    // update step
    if (value >= 0 && value < 3) {
      dispatch({ type: actions.stepChanged, payload: value })
    }

    // navigate to next screen
    navigation.navigate('jobdescription', { screen: enumRoute[value] })

  }

  function handleSaveJobDescription() {

    // unlock mission 3 job offers
    if (jobDescription.state === 'pending') {
      createMission({
        variables: {
          gameId: game.id,
          type: 'joboffers',
          quantity: 1
        }
      })
    }

    // save mission
    updateJobDescription({
      variables: {
        id: '5f6aec9716c90440435d6e45',
        description: jobTitle,
        wishList: wishList,
        gameId: game.id,
        environment: companyTypes,
        state: 'completed'
      }
    })
  }


  return (
    <View style={styles.container}>
      {step !== 0 ? (
        <TouchableOpacity style={styles.navigationButton} onPress={() => handleOnPress(step - 1)}>
          <Text>Back</Text>
        </TouchableOpacity>
      ) : (
          <View></View>
        )
      }
      {step !== 2 && (

        <TouchableOpacity style={styles.navigationButton} onPress={() => handleOnPress(step + 1)}>
          <Text>Next</Text>
        </TouchableOpacity>
      )
      }
      {step === 2 && companyTypes && jobTitle && wishList ? (
        <TouchableOpacity onPress={handleSaveJobDescription}>
          <Text style={styles.saveButtonText}>Save Mission</Text>
        </TouchableOpacity>
      )
        : (
          <View></View>
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 65,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  navigationButton: {
    boxSizing: 'border-box',
    paddingRight: 30,
    paddingLeft: 30

  },
  saveButtonContainer: {


  },
  saveButtonText: {
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
  }
})

export default NavigationFooter;