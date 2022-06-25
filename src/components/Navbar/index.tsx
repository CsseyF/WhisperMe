/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

import style from "./style.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsGear } from "react-icons/bs";

import { Link } from "react-router-dom";

import Logo from "../../assets/img/icon.png";

export default function index() {
  const [collapsed, setCollapsed] = useState<boolean>(true);

  return (
    <header className={style.main}>
      <img className={style.logo} src={Logo} alt="WhisperMe" />
      <nav className={style.navbar}>
        <Link to="/">
          <a href="/#">Home</a>
        </Link>
        <Link to="/howitworks">
          <a href="/#">How It Works</a>
        </Link>
        <Link to="/login">
          <a href="/#">Login</a>
        </Link>
        <Link to="/register">
          <a href="/#">Register</a>
        </Link>
        <button hidden={collapsed}>
          <FaTimes />
        </button>

        <button hidden={collapsed}>
          <FaBars />
        </button>

        <div className={style.userSection}>
          <button className={style.gearButton}>
            <BsGear className={style.gear} />
          </button>
        </div>
      </nav>
    </header>
  );
}
