/* eslint-disable react-hooks/rules-of-hooks */
import { useRef, useState } from "react";

import style from "./style.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsGear } from "react-icons/bs";

import Logo from "../../assets/img/icon.png";

export default function index() {
  const [collapsed, setCollapsed] = useState<boolean>(true);

  return (
    <header className={style.main}>
      <img className={style.logo} src={Logo} alt="WhisperMe" />
      <nav className={style.navbar}>
        <a href="/#">Home</a>
        <a href="/#">Credits</a>
        <a href="/#">Login</a>
        <a href="/#">Register</a>
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
