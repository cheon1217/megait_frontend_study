import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";

import MenuLink from "./components/MenuLink";
import Counter from "./pages/Counter";
import Department from "./pages/Department";
import News from "./pages/News";


const App = memo(() => {
    return (
        <div>
            <h1>15-redux</h1>
            <nav>
                <MenuLink to="/counter">Counter</MenuLink>
                <MenuLink to="/department">Department</MenuLink>
                <MenuLink to="/news">News</MenuLink>
            </nav>
            <hr />
            <Routes>
                <Route path="/counter" element={<Counter />} />
                <Route path="/department" element={<Department />} />
                <Route path="/news" element={<News />} />
            </Routes>
        </div>
    );
});

export default App;
