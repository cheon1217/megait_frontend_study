import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Expr from "./pages/Expr";
import If1 from "./pages/If1";
import If2 from "./pages/If2";
import If3 from "./pages/If3";
import If4 from "./pages/If4";
import Loop1 from "./pages/Loop1";
import Loop2 from "./pages/Loop2";
import Loop3 from "./pages/Loop3";

const App = () => {
  return (
      <div>
        <h1>03-jsx</h1>
        <hr />


        {/* 링크 구성 부분 */}
        <nav>
          <Link to="/Expr">[Expr]</Link>&emsp;&emsp;
          <Link to="/If1">[If1]</Link>&emsp;&emsp;
          <Link to="/If2">[If2]</Link>&emsp;&emsp;
          <Link to="/If3">[If3]</Link>&emsp;&emsp;
          <Link to="/If4">[If4]</Link>&emsp;&emsp;
          <Link to="/Loop1">[Loop1]</Link>&emsp;&emsp;
          <Link to="/Loop2">[Loop2]</Link>&emsp;&emsp;
          <Link to="/Loop3">[Loop3]</Link>
        </nav>

        <br />

        {/* 페이지 역할을 할 컴포넌트 명시하기 */}
        <Routes>
          <Route path="/Expr" element={<Expr/>} />
          <Route path="/If1" element={<If1/>} />
          <Route path="/If2" element={<If2/>} />
          <Route path="/If3" element={<If3/>} />
          <Route path="/If4" element={<If4/>} />
          <Route path="/Loop1" element={<Loop1/>} />
          <Route path="/Loop2" element={<Loop2/>} />
          <Route path="/Loop3" element={<Loop3/>} />
        </Routes>
      </div>
  );
};

export default App;
