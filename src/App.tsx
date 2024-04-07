// import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainContainer from "./layout/maincontainer";
import HomePage from "./pages/Home";
// import HomePage from "./pages/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainContainer>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </MainContainer>
      </BrowserRouter>
    </>
  );
}

export default App;
