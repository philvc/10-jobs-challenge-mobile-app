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

export const ADDMOBILEGAME_SERVER = gql`
  mutation addMobileGame($title: String, $players: [PlayersMobileInput]){
    addGameMobile(input: {title: $title, players: $players}){
      id
      title
      players {
        name
        isApplicant
      }
    }
  }
`