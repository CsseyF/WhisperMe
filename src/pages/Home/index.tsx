import React, { useEffect, useState } from "react";
import Api from "../../api";
import Navbar from "../../components/Navbar";
import WhisperCard from "../../components/WhisperCard";
import { CopyToClipboard } from "react-copy-to-clipboard";
import style from "./style.module.css";

const Home: React.FC = () => {
  const [cards, setCards] = useState<any[]>([]);
  const username = localStorage.getItem("user");

  useEffect(() => {
    (async () => {
      const response = await Api.ListWhisper();
      setCards(response.data);
    })();
  }, []);

  const showCards = (): JSX.Element[] => {
    const list = cards.map((card, index) => (
      <WhisperCard
        key={`whispercard_${index}`}
        message={card.message}
        cardColor={card.color}
        createdDate={card.createdDate}
        profileBase64={card.profilePicture}
      />
    ));
    return list;
  };

  return (
    <div className={style.main}>
      <Navbar />
      <div className={style.container}>
        <div className={style.titleContainer}>
          <h1>Your Whispers:</h1>
        </div>
        {cards.length === 0 ? (
          <div className={style.noWhispers}>
            <p>
              You doesn't have any whispers yet, send your whisper box link to
              your friends!
            </p>
            <CopyToClipboard
              text={`https://whisperme.vercel.app/sendwhisper/${username}`}
            >
              <button className={style.copyButton}>Copy Link</button>
            </CopyToClipboard>
          </div>
        ) : (
          <div className={style.whisperContainer}>{showCards()}</div>
        )}
      </div>
    </div>
  );
};

export default Home;
