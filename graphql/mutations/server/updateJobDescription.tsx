import gql from 'graphql-tag';

// fragment
import { MOBILE_MISSION_DATA_FRAGMENT } from '../../fragments/mobileMissionDataFragment';

export const UPDATE_JOB_DESCRIPTION_SERVER = gql`
  mutation updateJobDescription($id: String,$description:String, $environment:String, $wishList:String, $gameId: String, $state: String){
    updateJobDescription(input: {state: $state, id: $id, description:$description, gameId: $gameId, environment:$environment, wishList: $wishList}){
      ...MobileMissionData
    }
  }
  ${MOBILE_MISSION_DATA_FRAGMENT}
`