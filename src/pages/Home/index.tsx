/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import Api from "../../api";
import Navbar from "../../components/Navbar";
import WhisperCard from "../../components/WhisperCard";
import style from "./style.module.css";

export default function index() {
  const [cards, setCards] = useState<any[]>([]);

  const whispersList = Api.ListWhisper().then((response) => {
    function GetColor(card: any) {
      return { name: card.color };
    }
    setCards(response.data?.results.map(GetColor));
    console.log("RESPONSE DATA: " + response.data?.results);
  });

  // useEffect(() => {
  //   console.log("API RESPONSE: " + );
  // }, []);
  return (
    <div className={style.main}>
      <Navbar />

      <div className={style.container}>
        <div className={style.titleContainer}>
          <h1>Your Whispers:</h1>
        </div>

        <div className={style.whisperContainer}></div>
      </div>
    </div>
  );
}
