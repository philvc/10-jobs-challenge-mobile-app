import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import React, { useReducer, useState, useRef, useEffect } from 'react';
import PageTitle from '../../components/page-title';
import { useQuery, useApolloClient } from '@apollo/client';
import { GET_GAME_MOBILE_SERVER } from '../../graphql/queries/server/getGameMobile';
import PageBody from '../../components/page-body';

const Join = ({ route, navigation }: any) => {
  const challengeId = '5f6902d14f0ed809eb6735f1'

  // client
  const client = useApolloClient()

  // queries
  const { loading, data, error } = useQuery(GET_GAME_MOBILE_SERVER, {
    variables: {
      gameId: challengeId
    }
  })

  if (loading) return null

  // handlers
  function handlePress(name: string) {

    localStorage.setItem(`${challengeId}-me`, name)

    if (data && data.gameMobile) {
      localStorage.setItem('selectedChallenge', JSON.stringify(data.gameMobile))
    }

    navigation.navigate('dashboard')
  }

  return (
    <View>
      <View style={{ flex: 0.5 }}>
        <PageTitle text='Join a job quest' />
      </View>
      <PageBody>
        <View style={styles.playerContainer}>
          <View style={styles.subTitle}>
            <Text>Who are you ?</Text>
          </View>
          {data.gameMobile.players.map((player: any) => (

            < View style={styles.playerItem}>
              <TouchableOpacity onPress={() => handlePress(player.name)}>
                <Text>{player.name}</Text>
              </TouchableOpacity>
            </View>
          ))
          }
        </View>
      </PageBody>
    </View >
  )
}

const styles = StyleSheet.create({
  playerContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  subTitle: {
    margin: 10
  },
  playerItem: {
    flex: 0.5,
    borderWidth: 1,
    padding: 8,
    borderRadius: 12,
    marginBottom: 20
  }
})

export default Join;