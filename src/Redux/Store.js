import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducer, messagesReducer } from "./Reducers";

const reducers = combineReducers({
  messages: messagesReducer,
  login: loginReducer,
});
export const store = createStore(reducers, applyMiddleware(thunk));
