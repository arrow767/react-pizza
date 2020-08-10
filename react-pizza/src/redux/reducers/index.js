import {combineReducers} from "redux";
import filtersReducers from './filters';
import pizzasReducer from './pizzas'

const rootReducer = combineReducers({
    filters:filtersReducers,
    pizzas:pizzasReducer
})

export default rootReducer