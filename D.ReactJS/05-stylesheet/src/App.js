import React from "react";

/** (2-1) Link 대신 NavLink를 import한다. */
import { NavLink, Routes, Route } from "react-router-dom";

/** (2-2) CSS 파일도 import 해야한다. */
import "./assets/css/menu.css";

/** (2-3) 페이지를 구성할 컴포넌트 준비 */
import InlineCss from "./pages/InlineCss";
import CssClass from "./pages/CssClass";
import CssModule from "./pages/CssModule";
import Scss from "./pages/Scss";
import ScssModule from "./pages/ScssModule";
import StyledComponent from "./pages/StyledComponent";
import Responsive from "./pages/Responsive";
import News from "./pages/News";

/** (3) 전역 SCSS 적용을 위한 StyledComponent */
import GlobalStyles from "./GlobalStyles";

const App = () => {
  /** (1-1) 페이지 타이틀에 적용할 InlineCSS 정의 */
  // --> CSS는 JS 속성으로 기술해야 함.
  // --> 전체 구조는 JSON 객체. (단위가 포함된 수치값의 경우 문자열로 표기, 한쌍의 속성-값 뒤에는 세미콜론이 아닌 콤마가 위치해야 함)
  const myStyle = {
    fontWeight: "bold",
    color: "#b82514",
    textDecoration: "none",
    marginRight: "10px"
  };

  return (
      <div>
        <GlobalStyles />

        <h1 style={myStyle}>05-stylesheet</h1>        
        <nav>
            <NavLink className="normalLink" to="/inline_css">
              InlineCss
            </NavLink>&nbsp;&nbsp;
            <NavLink className="normalLink" to="/css_class">
              CssClass
            </NavLink>&nbsp;&nbsp;
            <NavLink className="normalLink" to="/css_module">
              CssModule
            </NavLink>&nbsp;&nbsp;
            <NavLink className="normalLink" to="/scss">
              Scss
            </NavLink>&nbsp;&nbsp;
            <NavLink className="normalLink" to="/scss_module">
              ScssModule
            </NavLink>&nbsp;&nbsp;
            <NavLink className="normalLink" to="/styled_component">
              StyledComponent
            </NavLink>&nbsp;&nbsp;
            <NavLink className="normalLink" to="/responsive">
              Responsive
            </NavLink>&nbsp;&nbsp;
            <NavLink className="normalLink" to="/news">
              News(Demo)
            </NavLink>
        </nav>

        <hr />

        <Routes>
            <Route path="/inline_css" element={<InlineCss />} />
            <Route path="/css_class" element={<CssClass />} />
            <Route path="/css_module" element={<CssModule />} />
            <Route path="/scss" element={<Scss />} />
            <Route path="/scss_module" element={<ScssModule />} />
            <Route path="/styled_component" element={<StyledComponent />} />
            <Route path="/responsive" element={<Responsive />} />
            <Route path="/news/*" element={<News />} />
        </Routes>
      </div>
  );
}

App.propTypes = {
  
};

App.defaultProps = {

};

export default App;
