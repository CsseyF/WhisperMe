import React from "react";

import style from "./style.module.css";

import Navbar from "../../components/Navbar";

export default function index() {
  return (
    <div className={style.container}>
      <Navbar />
      <div className={style.titleHeader}>
        <h1>How WhisperMe Works</h1>
      </div>
      <div className={style.main}>
        <p className={style.mainText}>
          Receba e envie mensagens anonimamente por meio de uma aplicação
          segura, simples e de fácil utilização. O WhisperMe permite que os
          usuários possam receber mensagens anônimas de amigos por meio de um
          processo fácil e rápido. Todas as mensagens são criptografadas e
          apenas o usuário possui acesso as mesmas.
        </p>

        <p>Criador</p>
        <span>Casey Fernandes</span>
        <p>Redes sociais:</p>
        <div className={style.socialMedia}>
          <a href="https://twitter.com/cssey_" target="_blank" rel="noreferrer">
            Twitter
          </a>
          <a
            href="https://www.instagram.com/cssey.tsx/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/casey-adesola-fernandes-3bb88b202/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="https://github.com/CsseyF" target="_blank" rel="noreferrer">
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
