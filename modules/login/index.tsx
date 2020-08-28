// modules
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useLazyQuery, useApolloClient } from '@apollo/client';

// queries
import { GET_ACCOUNT } from '../../graphql/queries/server/getAccount';
import { GET_PLAYER_CLIENT } from "../../graphql/queries/client/getPlayerClient";
import { GET_GAMES_CLIENT } from "../../graphql/queries/client/getGamesClient";

// reducer
import { formReducer, actions } from './reducer';

const initialState = {
  email: '',
  emailError: null,
  submitAttempted: false,
  submitMessage: '',
  status: 'clean',
}

const Login = ({ navigation }: any) => {

  // client
  const client = useApolloClient()

  // state
  const [state, dispatch] = React.useReducer(formReducer, initialState)

  // query
  const [getAccount, { loading, data }] = useLazyQuery(GET_ACCOUNT,
    {
      onCompleted({ account }) {
        const { player, games } = account;

        // update client
        client.writeQuery({
          query: GET_PLAYER_CLIENT,
          data: {
            player,
          }
        })

        client.writeQuery({
          query: GET_GAMES_CLIENT,
          variables: {
            playerId: player.id
          },
          data: {
            games: [...games]
          }
        })

        // update storage
        localStorage.setItem('player', JSON.stringify(player))
        localStorage.setItem('games', JSON.stringify(games))
        navigation.navigate('Challenges')
      }
    })

  // effect
  useEffect(() => {
    if (state.status === 'completed') {

      getAccount({
        variables: {
          email: state.email
        }
      })
    }

  }, [state])

  // handlers
  function handleChange(text: string) {
    dispatch({ type: actions.emailChanged, payload: text })
  }

  function handleSubmit() {
    dispatch({ type: actions.formSubmitted })
  }


  return (
    <View style={styles.container}>
      <Text>Login page</Text>
      <TextInput
        onChangeText={handleChange}
        value={state.email}
        placeholder="Your email..."
      />
      <TouchableOpacity onPress={handleSubmit}>
        <View>
          <Text>LOGIN</Text>
        </View>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;