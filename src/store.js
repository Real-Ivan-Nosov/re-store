import { createStore, applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk";

import reducer from "./reducers";

const logMiddleware = (store) => (next) => (action) => {
    console.log(action.type, store.getState());
    return next(action)
}

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        });
    }
    return next(action)
}

const store = createStore(reducer, applyMiddleware(
    ThunkMiddleware,
    stringMiddleware,
    logMiddleware));


const delayedActionCreator = (timeout) => (dispatch) => {
    setTimeout(() => dispatch({
        type: 'DELAYED_ACTION'
    }), timeout)
}

const myAction = delayedActionCreator(3000);

store.dispatch(myAction);

export default store