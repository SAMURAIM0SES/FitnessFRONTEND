import React from "react";
import ReactDOM from "react-dom/client";
import { Home,Login,Register } from "./components";
import { BrowserRouter} from 'react-router-dom'


const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);



root.render(
  <BrowserRouter>
  <Home />
  </BrowserRouter>
);
