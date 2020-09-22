import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Redirect } from "react-router-dom";
import "./App.css";
import { Header } from "./Components/Header/Header";
import { Login } from "./Components/Login/Login";
import { MessageZone } from "./Components/MessageZone/MessageZone";
import { isAuthThunk } from "./Redux/Reducers";

export function App() {
  const isAuth = useSelector((state) => state.login.isAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(isAuthThunk());
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {isAuth ? <MessageZone /> : <Login />}
      </BrowserRouter>
    </div>
  );
}
