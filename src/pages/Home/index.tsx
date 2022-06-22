import React from "react";
import Navbar from "../../components/Navbar";
import WhisperCard from "../../components/WhisperCard";
import style from "./style.module.css";

export default function index() {
  return (
    <div className={style.main}>
      <Navbar />
      <WhisperCard />
    </div>
  );
}
