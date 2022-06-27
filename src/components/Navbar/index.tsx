/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

import style from "./style.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsGear } from "react-icons/bs";
import Cookies from "js-cookie";

import { Link } from "react-router-dom";

import Logo from "../../assets/img/icon.png";

export default function index() {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const currentUser = localStorage.getItem("user");

  const handleLogout = () => {
    Cookies.remove("token", {
      path: "/",
      domain: "whisper-me-api.herokuapp.com",
    });
    localStorage.removeItem("user");
    window.location.reload();
  };
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

        {currentUser !== "" ? (
          <>
            <Link to="/login">
              <a href="/#">Login</a>
            </Link>
            <Link to="/register">
              <a href="/#">Register</a>
            </Link>
          </>
        ) : null}

        <button hidden={collapsed}>
          <FaTimes />
        </button>

        <button hidden={collapsed}>
          <FaBars />
        </button>

        <div className={style.userSection}>
          <span hidden={currentUser !== ""}>{currentUser}</span>
          <button className={style.gearButton} onClick={handleLogout}>
            <BsGear className={style.gear} />
          </button>
        </div>
      </nav>
    </header>
  );
}
