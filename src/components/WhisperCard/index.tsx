/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

import style from "./style.module.css";
import Profile from "../../assets/img/profilepicture.jpg";

export default function index() {
  return (
    <div className={style.main}>
      <div className={style.pictureTextBoxContainer}>
        <div className={style.profilePicture}>
          <img src={Profile} alt="picture" />
        </div>
        <div className={style.textbox}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            tempora voluptatum debitis saepe recusandae itaque omnis nulla
            fugiat rem impedit consectetur quos sapiente nisi modi, tenetur
            mollitia ipsa eaque officiis.
          </p>
        </div>
      </div>
      <div className={style.information}>
        <span>22/05/2022 - 14:00</span>
      </div>
    </div>
  );
}
