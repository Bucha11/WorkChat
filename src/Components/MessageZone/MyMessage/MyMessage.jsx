import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteMessageThunk,
  editMessageThunk,
  setMessageThunk,
} from "../../../Redux/Reducers";
import s from "./MyMessage.module.css";

export const MyMessage = (props) => {
  const [editedText, setEditedText] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const deleteMessage = () => {
    dispatch(deleteMessageThunk(props.id));
  };

  const editText = () => {
    let editTextPayload = { id: props.id, text: editedText };
    dispatch(editMessageThunk(editTextPayload));
    setIsEdit(false);
  };

  return (
    <div className={s.myMessage}>
      <div className={s.messageText}>
        <div className={s.name}>{props.name}</div>
        {isEdit ? (
          <input
            autoFocus
            onChange={(e) => {
              setEditedText(e.target.value);
            }}
            value={editedText}
            onBlur={editText}
          ></input>
        ) : (
          <div>{props.text}</div>
        )}
      </div>
      <div className={s.controls}>
        {" "}
        <button className={s.delete} onClick={deleteMessage}>
          delete
        </button>
        <button
          className={s.edit}
          onClick={() => {
            setIsEdit(!isEdit);
          }}
        >
          edit
        </button>
      </div>
    </div>
  );
};
