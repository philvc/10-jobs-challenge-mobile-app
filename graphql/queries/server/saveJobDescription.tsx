import gql from 'graphql-tag';
import { MOBILE_MISSION_DATA_FRAGMENT } from '../../fragments/mobileMissionDataFragment';

export const SAVE_JOB_DESCRIPTION_SERVER = gql`
  mutation saveJobDescription($missionId: String, $wishList: String){
    saveJobDescription(input: {missionId: $missionId, wishList: $wishList}){
      ...MobileMissionData
    }
  }
  ${MOBILE_MISSION_DATA_FRAGMENT}
`