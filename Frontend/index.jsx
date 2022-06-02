import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from 'react-dom';
import App from "./App";
import '/node_modules/bootstrap/dist/css/bootstrap.css';
import './components/CSS/animate.css'
import "./components/CSS/notification-growl.css";
//import AuthProvider from './components/UserState.js'

// ReactDOM.render(<AuthProvider><App /></AuthProvider>,document.getElementById('app')
// );
createRoot(document.getElementById("app")).render(<App />);

