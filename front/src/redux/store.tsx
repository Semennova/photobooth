import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import profileReducer from './profile-reducer'
import thunkMiddleWare from 'redux-thunk';

let reducers = combineReducers({
    profilePage: profileReducer

});

const composeEnhancers = compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)
));

export default store