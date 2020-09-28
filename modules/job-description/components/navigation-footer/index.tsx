// modules
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

// components
import { useJobDescriptionContext } from '../context/JobDescriptionContext';
import { actions } from '../context/reducer';

// style
import { useNavigation } from '@react-navigation/native';
import { useApolloClient, useMutation } from '@apollo/client';

// graphql
import { UPDATE_JOB_DESCRIPTION_SERVER } from '../../../../graphql/mutations/server/updateJobDescription'

import { SAVE_JOB_DESCRIPTION_SERVER } from '../../../../graphql/queries/server/saveJobDescription';
import { CREATE_3_JOB_OFFERS_MISSION_SERVER } from '../../../../graphql/mutations/server/create3JobOffersMissionServer';
import { GET_MOBILE_MISSIONS_CLIENT } from '../../../../graphql/queries/client/getMobileMissionsClient';
import { graphql } from '@apollo/react-hoc';

const NavigationFooter = () => {

  // Attributes
  const { data: jobDescription, dispatch } = useJobDescriptionContext()
  const { wishList, jobTitle, companyTypes, step } = jobDescription
  const navigation = useNavigation();
  const game = JSON.parse(localStorage.getItem('selectedChallenge') || '')
  const enumRoute = ['JobTitle', 'CompanyTypes', 'WishList', 'Congratulation']
  const client = useApolloClient()
  // TODO DASHBOARD + STEP JOB DESC MISSION + VALEUR DANS JOB DESC DATA
  // Mutations
  const [updateJobDescription] = useMutation(UPDATE_JOB_DESCRIPTION_SERVER)
  console.log('step', step)
  const [create3JobOffersMission] = useMutation(CREATE_3_JOB_OFFERS_MISSION_SERVER, {
    onCompleted({ create3JobOffersMission }) {
      const missions = client.readQuery({ query: GET_MOBILE_MISSIONS_CLIENT, variables: { gameId: game.id } })

      const updatedMissions = missions.concat([create3JobOffersMission])

      client.writeQuery({
        query: GET_MOBILE_MISSIONS_CLIENT,
        variables: {
          gameId: game.id
        },
        data: {
          missionsMobile: updatedMissions
        }
      })
      // if clicked on save go to congratulation page
      if (step === 3 && jobDescription.state === 'pending') {
        navigation.navigate('congratulation')
      }
    }
  })

  const [saveJobDescription] = useMutation(SAVE_JOB_DESCRIPTION_SERVER)


  // Handlers
  function handleOnPress(value: number) {
    // save mission update

    updateJobDescription({
      variables: {
        id: '5f6d978ba67c8a78cc9805f4',
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

  function handleCompleteJobDescription() {

    saveJobDescription({
      variables: {
        missionId: '5f6d978ba67c8a78cc9805f4',
        wishList: wishList,
      }
    })

    create3JobOffersMission({ variables: { gameId: game.id } })


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
        <TouchableOpacity onPress={handleCompleteJobDescription}>
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