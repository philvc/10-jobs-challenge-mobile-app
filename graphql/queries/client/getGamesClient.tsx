import gql from 'graphql-tag';

// fragment
import { GAME_DATA_FRAGMENT, GAME_DATA_FRAGMENT_MOBILE } from '../../fragments/gameDataFragment';

export const GET_GAMES_CLIENT_MOBILE = gql`
  query getGamesClient($playerId: String){
    gamesMobile @client{
      ...GameDataMobile
    }
  }
  ${GAME_DATA_FRAGMENT_MOBILE}
`
export const GET_GAMES_CLIENT = gql`
  query getGamesClient($playerId: String){
    games @client{
      ...GameData
    }
  }
  ${GAME_DATA_FRAGMENT}
` 