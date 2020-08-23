export const actions = {
    jobTitleChanged: 'jobTitleChanged',
    environmentChanged: 'environmentChanged',
    stepChanged: 'stepChanged',
}

export const initialState = {
    jobTitle: '',
    environment: '',
    step: 0,
    maxStep: 6,
}

export function reducer(state: any, action: any) {
    switch (action.type) {
        case actions.jobTitleChanged:
            return {
                ...state,
                jobTitle: action.payload
            }
        case actions.stepChanged:
            return {
                ...state,
                step: action.payload
            }

        default:
            return state
    }
}