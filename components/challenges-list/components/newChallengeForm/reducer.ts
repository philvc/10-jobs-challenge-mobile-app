
export const actions = {
    titleChanged: 'title',
    formSubmitted: 'formSubmitted',

}

export const initialState = {
    title: '',
    titleError: null,
    submitAttempted: false,
    submitMessage: '',
    status: 'clean',
}

export function reducer(state: any, action: any) {
    let error;
    switch (action.status) {
        case 'dirty':
            switch (action.type) {
                case actions.formSubmitted:
                    let formValid = true
                    let titleError = validate('title', state.title)
                    let emailError = validate('email', state.email)
                    if (titleError || !state.title || emailError || !state.email) {
                        formValid = false
                    }
                    return {
                        ...state,
                        titleError,
                        emailError,
                        submitAttempted: true,
                        status: formValid ? 'completed' : 'dirty',
                        submitMessage: formValid
                            ? 'Form Submitted Successfully'
                            : 'Form Has Errors',
                    }
            };
        case 'clean':
            switch (action.type) {

                case actions.titleChanged:
                    error = validate('title', action.payload)
                    return {
                        ...state,
                        title: action.payload,
                        titleError: error,
                        submitMessage: '',
                        status: 'dirty',
                    }
            };

        case 'completed':

        default:
            return state
    }
}

function validate(name: any, value: any) {
    if (typeof value === 'string') value = value.trim()
    switch (name) {
        case 'title':
            if (value.length === 0) {
                return 'Must enter title'
            } else {
                return null
            }
        case 'name':
            if (value.length === 0) {
                return 'Must enter name'
            } else {
                return null
            }
        case 'email':
            if (value.length === 0) {
                return 'Must enter email'
            } else if (
                !value.includes('@') ||
                !value.includes('.') ||
                value.split('.')[1].length < 2
            ) {
                return 'Must enter valid email'
            } else {
                return null
            }
    }
}