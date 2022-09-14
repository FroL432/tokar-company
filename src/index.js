import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/reset.css";
import "./assets/styles/global.sass";

import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <MainPage />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
