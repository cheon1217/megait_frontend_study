import React, { memo } from "react";
import { Route, Routes } from "react-router-dom";

import Covid19 from "./pages/Covid19";
import Top from "./components/Top";

const App = memo(() => {


    return (
        <div>
            <Top />
            <Routes>
                <Route path="/" exapt={true} element={<Covid19 />} />
            </Routes>
        </div>
    );
});

export default App;
