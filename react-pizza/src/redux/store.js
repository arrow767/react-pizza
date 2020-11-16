import {createStore, compose, applyMiddleware} from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)))
// window.store = store
export default store