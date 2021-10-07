import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/rootReducer";
import thunk from 'redux-thunk';

const INITIAL_STATE = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, INITIAL_STATE, composeEnhancers(applyMiddleware(thunk)));
    

export default store;