// modules
import React from 'react';
import { View, Text, VirtualizedList } from 'react-native';
import { useApolloClient } from '@apollo/client';

// components
import ChallengeItem from './components/challenge-item';

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


  return (
    <View>
      <Text>Challenges list</Text>
      <VirtualizedList
        data={gamesList}
        renderItem={({ item }) => <ChallengeItem challenge={item} />}
        keyExtractor={(item: any) => item.id}
        getItemCount={(data: any) => data.length}
      />
    </View>
  )
}

export default ChallengesList;