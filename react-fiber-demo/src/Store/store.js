import {createStore, combineReducers, applyMiddleware}from 'redux';
import {createLogger} from 'redux-logger';

import blankSceneReducer from "./Reducer/blanksSceneReducer";

export default createStore(
    combineReducers({blankScene: blankSceneReducer}),
    {},
    applyMiddleware(createLogger())
);
