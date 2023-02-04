const signUpFormReducer = (state, action) => {
    switch (action.type) {
        case 'input':
            return {
                ...state,
                input:{
                    ...state.input,
                    [action.payload.field]: action.payload.value
                }      
            }
        case 'error':
            return {
                ...state,
                errors:{
                    ...state.errors,
                    [action.payload.field]: action.payload.value
                }      
            }
        case 'resetErrors':
            const errors = {}
            for(const t in state.errors){
                errors[t] = ""
            }
            return {
                ...state,
                errors
            }
        case 'toggleConsent':
            return {
                ...state,
                consent: !state.consent
            }
        default:
            break;
    }
}

export { signUpFormReducer }