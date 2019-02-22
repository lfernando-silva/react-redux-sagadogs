import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { all, fork } from 'redux-saga/effects';
import { dogsReducer } from './Components/Dogs/reducer'
import { breedsReducer } from './Components/Breeds/reducer'

import { watcherDogs } from './Components/Dogs/sagas'
import { watcherBreeds, watcherBreed } from './Components/Breeds/sagas'

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// redux store
let store = createStore(
    combineReducers({dogsReducer, breedsReducer}),
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

function* root () {
    yield all([
        fork(watcherDogs),
        fork(watcherBreeds),
        fork(watcherBreed),
    ]);
}

sagaMiddleware.run(root);

export default store;