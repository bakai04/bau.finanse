import React, { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import { VaultsInfoPage, VaultsPage } from "./pages";
import MainPage from "./pages/main/main-page";
import { ModalsRoot } from "./shared/lib";
import "./shared/styles/app.scss"
import { Footer, getBalance, Header } from "./widgets";

function App() {
  useEffect(() => {
    const fetchData = async () => {
        const balance = await getBalance("0x70F657164e5b75689b64B7fd1fA275F334f28e18");
        console.log(balance);
    }
    fetchData();
  }, []);

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
