import gql from 'graphql-tag';

export const GET_GAME_MOBILE_SERVER = gql`
  query getGameServer($gameId: String){
    gameMobile(input: {gameId: $gameId}){
      id
      players {
        name
        isApplicant
      }
    }
  }
`