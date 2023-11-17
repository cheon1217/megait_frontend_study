import React from 'react';
import { Link, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  return (
    <div>
      <h1>02-simple-spa</h1>
      <hr />

      {/* ---- 링크 구성 부분 ---- */}
      <nav>
        <Link to="/">[Home]</Link>
        <Link to="/about">[About]</Link>
      </nav>

      <a href="/about">일반링크</a>

      {/* ---- 페이지 역할을 할 컴포넌트를 명시하기 ---- */}
      <Routes>
        {/* ----  ---- */}
        {/* ----  ---- */}
        <Route path="/" element={<Home/>} exact={true} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
};

export default App;
