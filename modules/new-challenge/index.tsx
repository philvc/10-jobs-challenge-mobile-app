// modules
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import React, { useReducer, useState, useRef, useEffect } from 'react';
import { useMutation, useApolloClient } from '@apollo/client';

// graphql
import { ADDMOBILEGAME_SERVER } from '../../graphql/mutations/server/addGameServer';
import AutoFocusTextInput from '../../components/auto-focus-text-input';
import PageTitle from '../../components/page-title';
import ParticipantInput from './components/participant-input';
import { useNavigation } from '@react-navigation/native';
import { GET_GAMES_CLIENT_MOBILE } from '../../graphql/queries/client/getGamesClient';



const NewChallenge = () => {

  // Attributes
  const [title, setTitle] = useState('')
  const [participants, setParticipants] = useState<any>([{ isApplicant: true, name: '' }, { isApplicant: false, name: '' }])
  const [inputFocused, setInputFocused] = useState<null | number>(null)
  const { navigate } = useNavigation()

  // client
  const client = useApolloClient()



  // queries 
  const [addGameMutation]: any = useMutation(ADDMOBILEGAME_SERVER, {
    onCompleted({ addGameMobile }) {

      // update cache
      const { gamesMobile }: any = client.readQuery({ query: GET_GAMES_CLIENT_MOBILE })

      const newGames = gamesMobile.concat([addGameMobile])
      client.writeQuery({
        query: GET_GAMES_CLIENT_MOBILE,
        data: {
          gamesMobile: newGames
        }
      })

      // save local storage
      localStorage.setItem('games', JSON.stringify(newGames))
      navigate('challenges')
    }
  });

  // handlers
  function handleOnClick() {
    addGameMutation({
      variables: {
        title: title,
        players: participants
      }
    })
  }

  function handleAddParticipant() {
    let lastIndex = participants.length
    setParticipants((prevValue: any) => {
      return [...prevValue, { isApplicant: false, name: '' }]
    })
    handleFocus(lastIndex)
  }

  function handleChangeName(text: string, id: number) {

    setParticipants((prevValue: any) => {
      return prevValue.map((el: any, index: number) => {
        if (index === id) {
          return { ...el, name: text }
        }
        return el
      })
    })
  }

  function handleFocus(index: number) {
    setInputFocused(index)
  }


  return (
    <View style={styles.newChallengeContainer}>
      <View style={{ flex: 0.5 }}>
        <PageTitle text='Your 10 Jobs Challenges' />
      </View>
      <View style={{ flex: 0.5 }}>
        <Text>
          You are about to start a new Job Quest! Invite your friends to your quest and together you will accomplish challenges to get you a new job !
      </Text>
      </View>
      <View style={{ flex: 9 }}>
        <View>
          <Text>Quest Title</Text>
        </View>
        <View>
          <AutoFocusTextInput style={styles.inputField} onChangeText={(text) => setTitle(text)} value={title} placeholder={'job quest title...'} />
        </View>
        <View>
          <View>
            <Text>Participants</Text>
          </View>

          <View>
            {participants.map((el: any, index: any) => {

              if (index === 0) {
                return (
                  <View>
                    <Text>You</Text>
                    <ParticipantInput placeholder='your name...' isFocused={index === inputFocused} onFocus={() => handleFocus(index)} key={`${el}-${index}`} value={participants[index].name} onChangeText={(text) => handleChangeName(text, index)} style={styles.inputField} />
                  </View>
                )
              }

              return <ParticipantInput isFocused={index === inputFocused} onFocus={() => handleFocus(index)} key={`${el}-${index}`} value={participants[index].name} onChangeText={(text) => handleChangeName(text, index)} style={styles.inputField} placeholder='friend name...' />
            }
            )

            }
            <TouchableOpacity onPress={handleAddParticipant}>
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.launchButton}>
          <TouchableOpacity onPress={handleOnClick}>
            <Text>Launch</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  newChallengeContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    height: "100%",
    padding: 15
  },

  inputField: {
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
  },
  launchButton: {
    padding: 15,
    borderWidth: 1
  }
})

export default NewChallenge;