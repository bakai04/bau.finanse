import React, { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import { VaultsInfoPage, VaultsPage } from "./pages";
import MainPage from "./pages/main/main-page";
import { ModalsRoot } from "./shared/lib";
import "./shared/styles/app.scss"
import { Footer, Header } from "./widgets";

function App() {
  return (
    <>
      <Header />
      <ModalsRoot/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/vaults" element={<VaultsPage />} />
        <Route path="/vaults-info/:id" element={<VaultsInfoPage />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
