import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessageThunk } from "../../../Redux/Reducers";
import { Chat } from "../Chat/Chat";

export const Flood = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMessageThunk());
  }, []);
  let myMessages = useSelector((state) => state.messages.myMessages).filter(
    (i) => i.tab === "/flood"
  );
  let othersMessages = useSelector(
    (state) => state.messages.othersMessages
  ).filter((i) => i.tab === "/flood");

  return (
    <div>
      <Chat myMessages={myMessages} othersMessages={othersMessages} />
    </div>
  );
};
