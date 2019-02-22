// action types
import { 
    API_BREED_FAILURE, 
    API_BREED_LIST_FAILURE, 
    API_BREED_LIST_REQUEST, 
    API_BREED_REQUEST,
    API_BREED_LIST_SUCCESS,
    API_BREED_SUCCESS
} from './types';

// reducer with initial state
const initialState = {
    fetching: false,
    breedList: null,
    breed: null,
    error: null
};

export function breedsReducer(state = initialState, action) {
    switch (action.type) {
        case API_BREED_REQUEST:
            return { ...state, fetching: true, error: null };
        case API_BREED_LIST_REQUEST:
            return { ...state, fetching: true, error: null };
        case API_BREED_LIST_SUCCESS:
            return { ...state, fetching: false, breedList: action.breedList };
        case API_BREED_SUCCESS:
            return { ...state, fetching: false, breed: action.breed };
        case API_BREED_LIST_FAILURE:
            return { ...state, fetching: false, breedList: null, error: action.error };
        case API_BREED_FAILURE:
            return { ...state, fetching: false, breed: null, error: action.error };
        default:
            return state;
    }
}