import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";
import StudentList from "./pages/StudentList";
import StudentView from "./pages/StudentView";
import StudentAdd from "./pages/StudentAdd";
import StudentEdit from "./pages/StudentEdit";

const App = memo(() => {
    return (
        <div>
            <h1>Redux</h1>

            <hr />

            <Routes>
                <Route path="/" exapt={true} element={<StudentList />} />
                <Route path="/student_add" element={<StudentAdd />} />
                <Route path="/student_view/:id" element={<StudentView />} />
                <Route path="/student_edit/:id" element={<StudentEdit />} />
            </Routes>
        </div>
    );
});

export default App;
