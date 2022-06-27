/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import HowItWorks from "../pages/HowItWorks";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Sending from "../pages/Sending";

export default function PublicRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<HowItWorks />} path="/howitworks" />
        <Route element={<Register />} path="/register" />
        <Route element={<Login />} path="/login" />
        <Route element={<Sending />} path="/sendwhisper/:paramUser" />
      </Routes>
    </Router>
  );
}
