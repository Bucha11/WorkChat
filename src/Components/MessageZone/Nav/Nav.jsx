import React from "react";
import s from "./Nav.module.css";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <div className={s.nav}>
      <div className={s.link}>
        <NavLink to="/flood" activeClassName={s.active}>
          Flood
        </NavLink>
      </div>
      <div className={s.link}>
        <NavLink to="/work" activeClassName={s.active}>
          Work
        </NavLink>
      </div>
    </div>
  );
};
