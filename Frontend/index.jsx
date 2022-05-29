import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import '/node_modules/bootstrap/dist/css/bootstrap.css';
import './components/CSS/animate.css'
import "./components/CSS/notification-growl.css";

createRoot(document.getElementById("app")).render(<App />);
