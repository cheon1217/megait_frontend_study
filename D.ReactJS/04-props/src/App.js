import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import MyProps from "./pages/MyProps";
import MyPropTypes from "./pages/MyPropTypes";

const App = () => {
  return (
    <div>
      <h1>04-props</h1>
      <nav>
        <Link to="/myprops">MyProps</Link>&nbsp;|&nbsp;
        <Link to="/myproptypes">MyPropTypes</Link>&nbsp;|&nbsp;
        <Link to="/mychildren">MyChildren</Link>&nbsp;|&nbsp;
        <Link to="/grade_table">GradeTable(demo)</Link>
      </nav>

      <hr />

      {/* Route 처리할 컴포넌트 정의 */}
      <Routes>
        <Route path="/myprops" element={<MyProps/>} />
        <Route path="/myproptypes" element={<MyPropTypes/>} />
        <Route path="/myprops" element={<MyProps/>} />
        <Route path="/myprops" element={<MyProps/>} />
      </Routes>
    </div>
  );
};

export default App;
