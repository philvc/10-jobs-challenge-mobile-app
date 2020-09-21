// modules
import React from 'react';
import { View, Text, VirtualizedList, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { useApolloClient, useMutation } from '@apollo/client';

// components
import ChallengeItem from './components/challenge-item';
import NewChallengeForm from './components/newChallengeForm';

// queries
import { GET_PLAYER_CLIENT } from '../../graphql/queries/client/getPlayerClient';
import { GET_GAMES_CLIENT_MOBILE } from '../../graphql/queries/client/getGamesClient';
import PageContainer from '../../components/page-container';
import PageTitle from '../../components/page-title';
import PageBody from '../../components/page-body';
import StartChallengeButton from './components/start-challenge';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

const ChallengesList = () => {

  const navigation = useNavigation()

  // client
  const client = useApolloClient()
  // const { player }: any = client.readQuery({ query: GET_PLAYER_CLIENT })
  const { gamesMobile }: any = client.readQuery({
    query: GET_GAMES_CLIENT_MOBILE,
  })

  console.log('challenges list', gamesMobile)

  // state
  const [gamesList, setGamesList] = React.useState(gamesMobile)
  const [isModalVisible, setIsModalVisible] = React.useState(false)

  // effetct
  useFocusEffect(
    React.useCallback(() => {

      const { gamesMobile }: any = client.readQuery({
        query: GET_GAMES_CLIENT_MOBILE,
      })

      setGamesList(gamesMobile)

    }, [])
  )

  // handlers
  function handleAddButton() {
    navigation.navigate('newchallenge')
  }

  return (
    <PageContainer>
      <View style={{ flex: 0.5 }}>
        <PageTitle text='Your 10 Jobs Challenges' />
      </View>
      <PageBody>
        <View style={styles.addButton}>
          <TouchableOpacity onPress={handleAddButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        {/* <StartChallengeButton /> */}
        {gamesList.length > 0 && gamesList.map((game: any) => <ChallengeItem key={game.id} challenge={game} />)}
      </PageBody>
    </PageContainer>
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
  },
  addButton: {
    padding: 15,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0, 0.5)',
    boxSizing: 'border-box',
    marginBottom: 10
  },
  addButtonText: {
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 10,
    textAlign: 'center',
    color: 'white',
  }
})
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

export default ChallengesList;