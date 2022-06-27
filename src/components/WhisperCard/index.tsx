/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

import { colors } from "../../data/colors";

import style from "./style.module.css";

interface Props {
  message: string;
  createdDate: string;
  cardColor: string;
  profileBase64: string;
}

export default function index(props: Props) {
  return (
    <div
      style={{ backgroundColor: colors[props.cardColor].lightColor }}
      className={style.main}
    >
      <div className={style.pictureTextBoxContainer}>
        <div className={style.profilePicture}>
          <img src={objectURL} alt="picture" />
        </div>
        <div
          style={{ backgroundColor: colors[props.cardColor].darkColor }}
          className={style.textbox}
        >
          <p>{props.message}</p>
        </div>
      </div>
      <div className={style.information}>
        <span>{props.createdDate}</span>
      </div>
    </div>
  );
}
