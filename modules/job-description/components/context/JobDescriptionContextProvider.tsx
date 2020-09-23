import React, { useEffect, useReducer } from "react";

import { reducer, initialState, actions } from "./reducer";
import { JobDescriptionContext } from "./JobDescriptionContext";
import { gql, useApolloClient } from "@apollo/client";

export function JobDescriptionContextProvider(props: any) {

  // state
  const [data, dispatch] = useReducer(reducer, initialState)
  const client = useApolloClient()

  // client
  const mission = client.readFragment({
    id: 'MissionMobile:5f6aec9716c90440435d6e45',
    fragment: gql`
      fragment JobDescMission on MissionMobile {
        id
        type
        step
        state
        description
        environment
        wishList
        gameId
      }
    `
  })


  useEffect(() => {
    console.log('useEffect', mission)
    if (mission) {
      console.log('mission', mission)
      dispatch({
        type: actions.stateChanged, payload: {
          jobTitle: mission.description,
          companyTypes: mission.environment,
          wishList: mission.wishList,
          state: mission.state,
        }
      })
    }
  }, [])

  return (
    <JobDescriptionContext.Provider value={{ data, dispatch }}>
      {props.children}
    </JobDescriptionContext.Provider>
  )
}