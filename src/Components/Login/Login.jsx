import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../Redux/Reducers";
import s from "./Login.module.css";

export const Login = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const formSubmit = () => {
    let formData = { login: login, password: password };
    dispatch(loginThunk(formData));
  };
  return (
    <div className={s.login}>
      <form>
        <input
          type="text"
          placeholder="Login"
          onChange={(e) => {
            setLogin(e.target.value);
          }}
          value={login}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <button type="submit" onClick={formSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};
