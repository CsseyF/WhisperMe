/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../api";

import style from "./style.module.css";

interface Props {
  register: boolean;
}

export default function index(props: Props) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = (user: string, password: string) => {
    const result = props.register
      ? Api.Register(user, password)
      : Api.Login(user, password);

    result.then((res) => {
      console.log("STATUS: " + res.status);
      if (res.status === 204) {
        navigate("/", { replace: true });
      }
    });
  };

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
            <input
              type="text"
              placeholder="Username"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <button onClick={() => handleSubmit(username, password)}>
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
