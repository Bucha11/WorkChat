import { localStorageAPI } from "../API/localStorage";

const SET_MESSAGE_STATE = "SET_MESSAGE_STATE";
const DELETE_MESSAGE = "DELETE_MESSAGE";
const EDIT_MESSAGE = "EDIT_MESSAGE";
const LOGIN_IN = "LOGIN_IN";
const IS_AUTH = "IS_AUTH";
const LOGIN_OUT = "LOGIN_OUT";

const initialMessageState = {
  othersMessages: [
    { id: 1, name: "John", text: "hello", tab: "/work" },
    { id: 2, name: "Jim", text: "hello", tab: "/work" },
    { id: 3, name: "Jane", text: "hi", tab: "/flood" },
    { id: 4, name: "Jan", text: "aloha", tab: "/flood" },
  ],
  myMessages: [],
};

export const messagesReducer = (state = initialMessageState, action) => {
  switch (action.type) {
    case SET_MESSAGE_STATE:
      return { ...state, myMessages: action.messages };
    case DELETE_MESSAGE:
      return {
        ...state,
        myMessages: state.myMessages.filter((i) => i.id !== action.id),
      };

    case EDIT_MESSAGE:
      return {
        ...state,
        myMessages: state.myMessages.map((i) => {
          if (i.id == action.id) {
            return { ...i, text: action.message };
          }
        }),
      };

    default:
      return state;
  }
};

const setMessages = (payload) => {
  debugger;
  return { type: SET_MESSAGE_STATE, messages: payload };
};

const deleteMessage = (id) => {
  return {
    type: DELETE_MESSAGE,
    id,
  };
};

const editMessage = (payload) => {
  return {
    type: EDIT_MESSAGE,
    id: payload.id,
    message: payload.text,
  };
};

export const setMessageThunk = () => (dispatch) => {
  const messages = localStorageAPI.getMessages();
  dispatch(setMessages(messages));
};

export const addNewMessageThunk = (payload) => (dispatch) => {
  localStorageAPI.setMessages(payload);
  dispatch(setMessageThunk());
};

export const deleteMessageThunk = (payload) => (dispatch) => {
  debugger;
  localStorageAPI.deleteMessage(payload);
  dispatch(deleteMessage(payload));
};

export const editMessageThunk = (payload) => (dispatch) => {
  localStorageAPI.editMessage(payload);
  dispatch(editMessage(payload));
  dispatch(setMessageThunk());
};

const initialLoginState = {
  isAuth: false,
  name: null,
};

export const loginReducer = (state = initialLoginState, action) => {
  switch (action.type) {
    case LOGIN_IN:
      return { ...state, isAuth: action.isAuth };
    case LOGIN_OUT:
      return { ...state, isAuth: action.isAuth };
    case IS_AUTH:
      return { ...state, name: action.name, isAuth: action.isAuth };

    default:
      return state;
  }
};

const login = (isAuth) => {
  return {
    type: LOGIN_IN,
    isAuth,
  };
};

const logout = (isAuth) => {
  return {
    type: LOGIN_OUT,
    isAuth,
  };
};

const isAuthAction = (authData) => {
  debugger;
  return {
    type: IS_AUTH,
    name: authData.name,
    isAuth: authData.loginIn,
  };
};

export const loginThunk = (payload) => (dispatch) => {
  const isAuth = loginCheck(payload);
  localStorageAPI.login(isAuth);
  dispatch(login(isAuth));
  dispatch(isAuthThunk());
};

export const logoutThunk = (isAuth) => (dispatch) => {
  localStorageAPI.logout(isAuth);
  dispatch(login(isAuth));
  dispatch(isAuthThunk());
};

const loginCheck = (payload) => {
  const login = "user";
  const password = 12345;

  return login == payload.login && password == payload.password;
};

export const isAuthThunk = () => (dispatch) => {
  debugger;
  const authData = localStorageAPI.isAuth();

  dispatch(isAuthAction(authData));
  dispatch(setMessageThunk());
};
