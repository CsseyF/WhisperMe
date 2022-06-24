/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Credits from "../pages/Credits";
import Register from "../pages/Register";
import Login from "../pages/Login";

export default function PublicRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Credits />} path="/credits" />
        <Route element={<Register />} path="/register" />
        <Route element={<Login />} path="/login" />
      </Routes>
    </Router>
  );
}
