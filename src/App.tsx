import React from 'react';
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/main/main-page";
import "./shared/styles/app.scss"
import { Footer, Header } from "./widgets";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
