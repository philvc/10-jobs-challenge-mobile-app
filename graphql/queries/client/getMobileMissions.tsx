import gql from 'graphql-tag';

import { MOBILE_MISSION_DATA_FRAGMENT } from '../../fragments/mobileMissionDataFragment';

export const GET_MOBILE_MISSIONS = gql`
  query getMobileMissions($gameId: String){
    missionsMobile(input: {gameId: $gameId}){
      ...MobileMissionData
    }
  }
  ${MOBILE_MISSION_DATA_FRAGMENT}
`