

import { createContext, useContext } from "react";
import { initialStateInterface, initialState } from "./reducer";

interface IJobDescriptionContext {
  data: initialStateInterface,
  dispatch: any,
}

export const JobDescriptionContext = createContext<IJobDescriptionContext>({
  data: initialState,
  dispatch: () => { }
})

export function useJobDescriptionContext() {
  return useContext(JobDescriptionContext)
}





