import React, { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import { VaultsInfoPage, VaultsPage } from "./pages";
import MainPage2 from "./pages/main-2/main-page";
import { MainVPage } from "./pages/main-v";
import MainPage from "./pages/main/main-page";
import { ModalsRoot } from "./shared/lib";
import "./shared/styles/app.scss"
import 'react-tooltip/dist/react-tooltip.css'
import { Footer, Header } from "./widgets";

function App() {
  return (
    <>
      <Header />
      <ModalsRoot />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/main-2" element={<MainVPage />} />
        <Route path="/main-3" element={<MainPage2 />} />
        <Route path="/vaults" element={<VaultsPage />} />
        <Route path="/vaults-info/:id" element={<VaultsInfoPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
