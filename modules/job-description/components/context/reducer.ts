export const actions = {
    jobTitleChanged: 'jobTitleChanged',
    companyTypesChanged: 'companyTypesChanged',
    wishListChanged: 'wishListChanged',
    stepChanged: 'stepChanged',
    currentStepChanged: 'currentStepChanged',
    stateChanged: 'stateChanged',
}

export interface initialStateInterface {
    step: number,
    jobTitle: string,
    companyTypes: string,
    wishList: string,
    maxStep: number,
    currentStep: number,
    state: string
}

export const initialState: initialStateInterface = {
    jobTitle: '',
    companyTypes: '',
    wishList: '',
    step: 0,
    maxStep: 6,
    currentStep: 0,
    state: '',
}

export function reducer(state: initialStateInterface, action: any) {
    switch (action.type) {
        case actions.jobTitleChanged:
            return {
                ...state,
                jobTitle: action.payload
            }
        case actions.companyTypesChanged:
            return {
                ...state,
                companyTypes: action.payload
            }
        case actions.wishListChanged:
            console.log('sdfsq')
            return {
                ...state,
                wishList: action.payload
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

        case actions.stateChanged:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}