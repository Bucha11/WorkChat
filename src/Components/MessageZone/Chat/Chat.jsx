import React from "react";
import s from "./Chat.module.css";
import { Message } from "../Message/Message";
import { MyMessage } from "../MyMessage/MyMessage";

export const Chat = (props) => {
  let myMessagesToRender = props.myMessages.map((i) => (
    <MyMessage text={i.text} name={i.name} key={i.id} id={i.id} />
  ));
  let othersMessagesToRender = props.othersMessages.map((i) => (
    <Message text={i.text} name={i.name} key={i.id} />
  ));
  return (
    <div className={s.chat}>
      {othersMessagesToRender}
      {myMessagesToRender}
    </div>
  );
};
