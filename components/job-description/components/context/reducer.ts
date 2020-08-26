export const actions = {
    jobTitleChanged: 'jobTitleChanged',
    stepChanged: 'stepChanged',
    currentStepChanged: 'currentStepChanged',
}

interface initialStateInterface {
    step: number,
    jobTitle: string,
    maxStep: number,
    currentStep: number,
}

export const initialState: initialStateInterface = {
    jobTitle: '',
    step: 0,
    maxStep: 6,
    currentStep: 0,
}

export function reducer(state: initialStateInterface, action: any) {
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
        case actions.currentStepChanged:
            return {
                ...state,
                currentStep: action.payload
            }

        default:
            return state
    }
}