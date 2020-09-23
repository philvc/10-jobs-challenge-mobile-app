import gql from 'graphql-tag';
export const ADDGAME_SERVER = gql`
  mutation addGame($title: String, $recruiterId: String, $email: String, $name: String){
    addGame(input: {title: $title, recruiterId: $recruiterId, email: $email, name: $name}){
      id
      title
      recruiterId
      applicant {
        id
        email
        playerName
      }
      recruiter {
        id
        email
        playerName
      }
      applicantId
      missionsAccomplished
      createdAt
    }
  }
`

export const ADD_MOBILE_GAME_SERVER = gql`
  mutation addMobileGame($title: String, $players: [PlayersMobileInput], $owner: String){
    addGameMobile(input: {title: $title, players: $players, owner: $owner}){
      id
      title
      players {
        name
        isApplicant
      }
      owner
    }
  }
`