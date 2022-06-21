import React from "react";
import Navbar from "../../components/Navbar";
import style from "./style.module.css";

export default function index() {
  return (
    <div className={style.main}>
      <Navbar />
      <h1>Hello World!</h1>
    </div>
  );
}
