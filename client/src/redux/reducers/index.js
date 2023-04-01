const initialState = {
    dogs: [],
    allDogs: [],
    tempers: [],
    details: [],
    errors: {}
}
export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_DOGS':
            return {
                ...state,
                dogs: action.payload,
                allDogs: action.payload,
                errors: {}
            }
        case 'GET_DOGS_BY_NAME':
            return {
                ...state,
                dogs: action.payload,
                errors: {}
            }
        case 'GET_DOG_BY_ID':
            return {
                ...state,
                details: action.payload,
                errors: {}
            }
        case 'CLEAN_DOG':
            return {
                ...state,
                details: [],
            }
        case 'GET_TEMPERS':
            return {
                ...state,
                tempers: action.payload,
                errors: {}
            }

        // case 'DOGS_BY_TEMPER':
        //     let filteredTemper= state.allDogs.filter(dog=> dog.temper.find(({id})=> id === action.payload))
        // return{
        //         ...state,
        //         dogs: filteredTemper,
        //         errors:{}
        //     }
        case 'ERROR':
            return {
                ...state,
                errors: action.payload
            }
        default: return state
    }
}