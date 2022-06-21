import React from "react";

import style from "./style.module.css";

import Logo from "../../assets/img/icon.png";

export default function index() {
  return (
    <div className={style.main}>
      <ul className={style.navlist}>
        <li>Settings</li>
        <li>Credits</li>
        <li>
          <img className={style.logo} src={Logo} alt="WhisperMe" />
        </li>
        <li>Login</li>
        <li>Register</li>
      </ul>
    </div>
  );
}
