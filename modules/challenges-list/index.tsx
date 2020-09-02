// modules
import React from 'react';
import { View, Text, VirtualizedList, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { useApolloClient } from '@apollo/client';

// components
import ChallengeItem from './components/challenge-item';
import NewChallengeForm from './components/newChallengeForm';

// queries
import { GET_PLAYER_CLIENT } from '../../graphql/queries/client/getPlayerClient';
import { GET_GAMES_CLIENT } from '../../graphql/queries/client/getGamesClient';

const ChallengesList = () => {

  // storage
  const challenges = localStorage.getItem('challenges') || []

  // // client
  // const client = useApolloClient()
  // const { player }: any = client.readQuery({ query: GET_PLAYER_CLIENT })
  // const { games }: any = client.readQuery({
  //   query: GET_GAMES_CLIENT,
  //   variables: {
  //     playerId: player.id
  //   }
  // })

  // state
  const [gamesList, setGamesList] = React.useState(challenges)
  const [isModalVisible, setIsModalVisible] = React.useState(false)

  // handlers
  function handleNewChallenge() {
    console.log('isModalVisible', isModalVisible)
    setIsModalVisible(true)
  }

  console.log(isModalVisible)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your 10 Jobs Challenges</Text>
      <View style={styles.listContainer}>
        <ChallengeItem challenge={{ title: "Challenge 1" }} />
        <ChallengeItem challenge={{ title: "Challenge 2" }} />
        <ChallengeItem challenge={{ title: "Challenge 3" }} />
        <ChallengeItem challenge={{ title: "Challenge 4" }} />
      </View>
      {/* <VirtualizedList
        style={styles.challengesList}
        data={gamesList}
        renderItem={({ item }) => <ChallengeItem challenge={item} />}
        keyExtractor={(item: any) => item.id}
        getItemCount={(data: any) => data.length}
      />
      <View>
        <View style={styles.newChallengeButton}>
          <TouchableOpacity onPress={handleNewChallenge}>
            <Text style={styles.newChallengeText}>New Challenge</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.modalView}>
        <Modal
          visible={false}
          animationType="slide"
          transparent={true}
          presentationStyle="fullScreen"
        >
          <NewChallengeForm />
        </Modal>
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 15,
    width: '100%',
    marginTop: 20
  },
  title: {
    fontSize: 24,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    height: "100%",
    padding: 15
  },
  newChallengeButton: {
    width: 200,
    padding: 5,
    margin: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
  },
  newChallengeText: {
    textAlign: 'center',
  },
  challengesList: {
    maxHeight: "fit-content",
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0,
  }
})

export default ChallengesList;