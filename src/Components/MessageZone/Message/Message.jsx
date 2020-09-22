import React from "react";
import s from "./Message.module.css";

export const Message = (props) => {
  return (
    <div className={s.message}>
      <div className={s.name}>{props.name}</div>
      <div className={s.text}>{props.text}</div>
    </div>
  );
};
