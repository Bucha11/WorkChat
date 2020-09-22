import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { addNewMessageThunk } from "../../Redux/Reducers";
import s from "./Input.module.css";

export const Input = () => {
  let loc = useLocation();

  const dispatch = useDispatch();

  const addNewMessage = () => {
    let payload = { tab: loc.pathname, message: message };
    dispatch(addNewMessageThunk(payload));
    setMessage("");
  };

  const [message, setMessage] = useState("");
  return (
    <div className={s.input}>
      <input
        type="text"
        placeholder="Enter your message"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        value={message}
      ></input>
      <button onClick={addNewMessage}> Send</button>
    </div>
  );
};
