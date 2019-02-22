import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { dogsReducer } from './Components/Dogs/reducer'
import { watcherDogs } from './Components/Dogs/sagas'

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// redux store
let store = createStore(
    combineReducers({dogsReducer}),
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watcherDogs);

export default store;