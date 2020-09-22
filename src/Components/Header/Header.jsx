import React from "react";

import s from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../../Redux/Reducers";

export const Header = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.login.name);
  const isAuth = useSelector((state) => state.login.isAuth);
  return (
    <div className={s.header}>
      <div className={s.logo}>WorkChat</div>
      <div className={s.greeting}>
        <div>Hello, {name}</div>{" "}
        {isAuth ? (
          <button
            onClick={() => {
              dispatch(logoutThunk(false));
            }}
          >
            Logout
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
