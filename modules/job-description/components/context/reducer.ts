export const actions = {
    jobTitleChanged: 'jobTitleChanged',
    companyTypesChanged: 'companyTypesChanged',
    wishListChanged: 'wishListChanged',
    stepChanged: 'stepChanged',
    currentStepChanged: 'currentStepChanged',
}

export interface initialStateInterface {
    step: number,
    jobTitle: string,
    companyTypes: string,
    wishList: string,
    maxStep: number,
    currentStep: number,
}

export const initialState: initialStateInterface = {
    jobTitle: '',
    companyTypes: '',
    wishList: '',
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
        case actions.companyTypesChanged:
            return {
                ...state,
                companyTypes: action.payload
            }
        case actions.wishListChanged:
            return {
                ...state,
                companyTypes: action.payload
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