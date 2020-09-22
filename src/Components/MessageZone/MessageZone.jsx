import React, { useEffect } from "react";
import { Route } from "react-router";
import { Input } from "../Input/Input";
import { Flood } from "./Flood/Flood";

import { Nav } from "./Nav/Nav";
import { Work } from "./Work/Work";
import s from "./MessageZone.module.css";

export const MessageZone = () => {
  return (
    <div className={s.container}>
      <Nav />
      <div className={s.messageZone}>
        <Route path="/flood">
          <Flood />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
      </div>
      <Input />
    </div>
  );
};
