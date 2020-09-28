import gql from 'graphql-tag';

export const MOBILE_MISSION_DATA_FRAGMENT = gql`
  fragment MobileMissionData on MissionMobile {
    id
    type
    title
    step
    state
    description
    environment
    wishList
    gameId
    state
  }
`