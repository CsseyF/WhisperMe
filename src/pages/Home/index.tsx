import React from "react";
import Navbar from "../../components/Navbar";
import WhisperCard from "../../components/WhisperCard";
import style from "./style.module.css";

export default function index() {
  return (
    <div className={style.main}>
      <Navbar />

      <div className={style.container}>
        <div className={style.titleContainer}>
          <h1>Your Whispers:</h1>
        </div>

        <div className={style.whisperContainer}>
          <WhisperCard cardColor="Pink" />
          <WhisperCard cardColor="Green" />
          <WhisperCard cardColor="Blue"/>
          <WhisperCard cardColor="Yellow"/>
        </div>
      </div>
    </div>
  );
}
