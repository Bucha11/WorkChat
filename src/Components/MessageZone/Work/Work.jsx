import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessageThunk } from "../../../Redux/Reducers";
import { Chat } from "../Chat/Chat";

export const Work = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMessageThunk());
  }, []);
  let myMessages = useSelector((state) => state.messages.myMessages).filter(
    (i) => i.tab === "/work"
  );
  let othersMessages = useSelector(
    (state) => state.messages.othersMessages
  ).filter((i) => i.tab === "/work");

  return (
    <div>
      <Chat myMessages={myMessages} othersMessages={othersMessages} />
    </div>
  );
};
