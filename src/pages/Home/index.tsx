import React, { useEffect, useState } from "react";
import Api from "../../api";
import Navbar from "../../components/Navbar";
import WhisperCard from "../../components/WhisperCard";
import style from "./style.module.css";

const Home: React.FC = () => {
  const [cards, setCards] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const response = await Api.ListWhisper();
      setCards(response.data);
    })();
  }, []);
  return (
    <div className={style.main}>
      <Navbar />

      <div className={style.container}>
        <div className={style.titleContainer}>
          <h1>Your Whispers:</h1>
        </div>

        <div className={style.whisperContainer}>
          {cards.map((card, index) => (
            <WhisperCard
              key={`whispercard_${index}`}
              message={card.message}
              cardColor={card.color}
              createdDate={card.createdDate}
              profileBase64={card.profilePicture}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
