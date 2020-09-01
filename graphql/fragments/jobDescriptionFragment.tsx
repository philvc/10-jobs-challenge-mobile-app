import gql from 'graphql-tag';

export const JOB_DESCRIPTION_DATA_FRAGMENT = gql`
  fragment JobDescription on JobDescription {
    id
    step
    state
    description
    environment 
    wishList
    applicantId
  }
`