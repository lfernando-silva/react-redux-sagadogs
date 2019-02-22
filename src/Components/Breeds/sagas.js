import { takeLatest, call, put } from "redux-saga/effects";
import * as breedsActions from './actions';

// action types
import { 
    API_BREED_FAILURE,
    API_BREED_SUCCESS,
    API_BREED_REQUEST,
    API_BREED_LIST_REQUEST,
    API_BREED_LIST_FAILURE, 
    API_BREED_LIST_SUCCESS,
} from './types';

const {fetchBreeds, fetchBreed} = breedsActions;

// worker saga: makes the api call when watcher saga sees the action
function* workerBreedList() {
    try {
        const response = yield call(fetchBreeds);

        const breedList = response.data.message;

        // dispatch a success action to the store with the new dog
        yield put({ type: API_BREED_LIST_SUCCESS, breedList });

    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({ type: API_BREED_LIST_FAILURE, error });
    }
}

function* workerBreed(action) {
    const selected = action.breed;

    try {
        const response = yield call(fetchBreed, selected);

        const breed = response.data.message;

        // dispatch a success action to the store with the new dog
        yield put({ type: API_BREED_SUCCESS, breed });

    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({ type: API_BREED_FAILURE, error });
    }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherBreeds() {
    yield takeLatest(API_BREED_LIST_REQUEST, workerBreedList);
}

export function* watcherBreed(){
    yield takeLatest(API_BREED_REQUEST, workerBreed);
}