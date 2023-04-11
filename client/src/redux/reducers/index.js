const initialState = {
    dogs: [],
    allDogs: [],
    tempers: [],
    details: [],
    errors: {}
}

function orderByAbc(order, state) {
    let allDogs = state
    if (order === 'asc') {
        allDogs.sort(function (a, b) {
            if (a.name > b.name) {
                return 1
            }
            if (b.name > a.name) {
                return -1
            }
            return 0
        })
    }
    else if (order === 'desc') {
        allDogs.sort(function (a, b) {
            if (a.name > b.name) {
                return -1
            }
            if (b.name > a.name) {
                return 1
            }
            return 0
        })
    }
    return allDogs
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_DOGS':
            console.log('soy GET_DOGS', action.payload)
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
            console.log(state.details)
            return {
                ...state,
                details: [],
            }
        case 'GET_TEMPERS':
            console.log('soy GET_TEMPERS',action.payload)
            return {
                ...state,
                tempers: action.payload,
                errors: {}
            }
        case 'FILTER_CREATED':
            let created = action.payload === 'createDb' ? state.allDogs.filter(dog => dog.createDb) : state.allDogs.filter(dog => !dog.createDb)
            return {
                ...state,
                dogs: action.payload === 'all' ? state.allDogs : created.length === 0 ? 'NoSeEncuentranPerros' : created,
                errors:{}
            }
        case 'ORDER_BY_ABC':
            let sortedArr = action.payload === 'asc' ? orderByAbc('asc', state.dogs) : action.payload === 'desc' ? orderByAbc('desc', state.dogs) : state.allDogs
            return {
                ...state,
                dogs: sortedArr,
                errors: {}
            }
        case 'ORDER_BY_WEIGHT':
            let filterByWeight = action.payload === 'max' ? state.dogs.sort((a, b) => {
                return b.weightMax - a.weightMax;
            })
                : state.dogs.sort((a, b) => {
                    return a.weightMax - b.weightMax
                })
            return {
                ...state,
                dogs: filterByWeight,
                errors: {}
            }
            case 'FILTER_BY_TEMPER':
            let filterDogs = action.payload === 'all' ? state.allDogs : state.allDogs.filter(dog => Array.isArray(dog.tempers)? dog.tempers.find(temp => temp.name === action.payload  ): dog.tempers.includes(action.payload))
            return{
                    ...state,
                    dogs: filterDogs.length === 0 ? '' : filterDogs,
                    errors:{}
                }
         
        case 'ERROR':
            return {
                ...state,
                errors: action.payload
            }
        default: return state
    }
}