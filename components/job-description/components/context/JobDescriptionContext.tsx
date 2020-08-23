

import { createContext, useContext } from "react";

interface IJobDescriptionContext {
  data: any,
  dispatch: any,
}

export const JobDescriptionContext = createContext<IJobDescriptionContext>({
  data: {},
  dispatch: () => { }
})

export function useJobDescriptionContext() {
  return useContext(JobDescriptionContext)
}





