import gql from 'graphql-tag';

import { MOBILE_MISSION_DATA_FRAGMENT } from '../../fragments/mobileMissionDataFragment';

export const GET_MOBILE_MISSIONS_CLIENT = gql`
  query getMobileMissions($gameId: String){
    missionsMobile(input: {gameId: $gameId}) @client{
      ...MobileMissionData
    }
  }
  ${MOBILE_MISSION_DATA_FRAGMENT}
`