import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./common/Header";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

import Main from "./pages/Main";

/**
 * 기본 레이아웃 구성 함수
 * @returns {JSX.Element}
 */
const App = () => {
  return (
      <div>
        <Header />
        <Navbar />

        <Routes>
          <Route path="/" exact={true} element={<Main />} />
        </Routes>
        
        <Footer />
      </div>
  );
};

export default App;