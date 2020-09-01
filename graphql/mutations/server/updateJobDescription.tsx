import gql from 'graphql-tag';

// fragment
import { JOB_DESCRIPTION_DATA_FRAGMENT } from '../../fragments/jobDescriptionFragment';

export const UPDATE_JOB_DESCRIPTION_SERVER = gql`
  mutation updateJobDescription($id: String, $step:Int, $description:String, $environment:String, $wishList:String, $applicantId:String){
    updateJobDescription(input: {id: $id, step: $step, description:$description, environment:$environment, wishList: $wishList, applicantId:$applicantId}){
      ...JobDescription
    }
  }
  ${JOB_DESCRIPTION_DATA_FRAGMENT}
`