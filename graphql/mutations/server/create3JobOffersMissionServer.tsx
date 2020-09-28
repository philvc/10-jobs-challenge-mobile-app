import gql from 'graphql-tag';

import { MOBILE_MISSION_DATA_FRAGMENT } from '../../fragments/mobileMissionDataFragment';

export const CREATE_3_JOB_OFFERS_MISSION_SERVER = gql`
  mutation create3JobOffersMission($gameId: String){
    create3JobOffersMission(input: {gameId: $gameId}){
      ...MobileMissionData
    }
  }
  ${MOBILE_MISSION_DATA_FRAGMENT}
`