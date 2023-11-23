import React from "react";

import { Link, Routes, Route } from "react-router-dom";

const App = () => {
  return (
      <div>
        <h1>Exam</h1>

        <nav>
          <Link to="/exam">성적표(연습문제)</Link>
        </nav>

        <Routes>
          <Route path="/exam/*" element={<Exam/>}></Route>
        </Routes>
      </div>
  );
}

export default App;
