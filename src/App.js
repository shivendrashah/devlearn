import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import HomePage from "./components/Home/HomePage";
import { HTMLSideBar } from "./components/SideBar/HTMLSideBar";
import HTMLIntroduction from "./components/Pages/HTML/Introduction";
import HTMLBasic from "./components/Pages/HTML/Basic";
import HTMLElements from "./components/Pages/HTML/Elements";
import { CSSSideBar } from "./components/SideBar/CSSSideBar";
import { JSSideBar } from "./components/SideBar/JSSideBar";
import { ReactSideBar } from "./components/SideBar/ReactSideBar";
import CSSIntroduction from "./components/Pages/CSS/Introduction";
import { SignUp } from "./components/SignUp/SignUp";
import { LogIn } from "./components/LogIn/LogIn";
import JavaScriptIntroduction from "./components/Pages/JavaScript/Introduction";
import ReactIntroduction from "./components/Pages/React/Introduction";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        {/* HTML */}
        <Route path="/html" element={<HTMLSideBar />}>
          <Route index element={<HTMLIntroduction />} />
          <Route
            path="/html/html_introduction"
            element={<HTMLIntroduction />}
          />
          <Route path="/html/html_basic" element={<HTMLBasic />} />
          <Route path="/html/html_elements" element={<HTMLElements />} />
        </Route>

        {/* CSS */}
        <Route path="/css" element={<CSSSideBar />}>
          <Route index element={<CSSIntroduction />} />
          <Route path="/css/css_introduction" element={<CSSIntroduction />} />
        
        </Route>

        {/* JavaScript */}
        <Route path="/javascript" element={<JSSideBar />}>
          <Route index element={<JavaScriptIntroduction />} />
          <Route
            path="/javascript/js_intro"
            element={<JavaScriptIntroduction />}
          />
         
        </Route>

        {/* React */}
        <Route path="/react" element={<ReactSideBar />}>
          <Route index element={<ReactIntroduction />} />
          <Route path="/react/react_intro" element={<ReactIntroduction />} />
        
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
