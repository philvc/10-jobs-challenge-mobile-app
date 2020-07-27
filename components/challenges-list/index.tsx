// modules
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useApolloClient } from '@apollo/client';

// components
import ChallengeItem from './components/challenge-item';

// queries
import { GET_PLAYER_CLIENT } from '../../graphql/queries/client/getPlayerClient';
import { GET_GAMES_CLIENT } from '../../graphql/queries/client/getGamesClient';

const ChallengesList = () => {

  // client
  const client = useApolloClient()
  const { player }: any = client.readQuery({ query: GET_PLAYER_CLIENT })
  const { games }: any = client.readQuery({
    query: GET_GAMES_CLIENT,
    variables: {
      playerId: player.id
    }
  })

  // state
  const [gamesList, setGamesList] = React.useState(games)

  // utils
  function renderItem({ item }: any) {
    return (
      <ChallengeItem challenge={item} />
    )
  }

  return (
    <View>
      <Text>Challenges list</Text>
      <FlatList
        data={gamesList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default ChallengesList;