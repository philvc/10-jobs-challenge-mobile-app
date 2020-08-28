import React, { useReducer } from "react";

import { reducer, initialState } from "./reducer";
import { JobDescriptionContext } from "./JobDescriptionContext";

export function JobDescriptionContextProvider(props: any) {

  const [data, dispatch] = useReducer(reducer, initialState)

  return (
    <JobDescriptionContext.Provider value={{ data, dispatch }}>
      {props.children}
    </JobDescriptionContext.Provider>
  )
}