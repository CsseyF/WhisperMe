import React from "react";

import style from "./style.module.css";

interface Props {
  register: boolean;
}

export default function index(props: Props) {
  return (
    <div className={style.container}>
      <div className={style.main}>
        <div className={style.titleHeader}>
          <h3>{props.register ? "Register" : "Login"}</h3>
        </div>
        <div className={style.bodyContainer}>
          <span>
            {props.register
              ? "Registre-se de forma rápida e prática"
              : "Faça o login"}
          </span>
          <div className={style.body}>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Accept</button>
          </div>
        </div>
      </div>
    </div>
  );
}
