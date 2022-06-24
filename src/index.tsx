import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/global.css";
import PublicRoutes from "./routes/PublicRoutes";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <PublicRoutes />
  </React.StrictMode>
);

reportWebVitals();
