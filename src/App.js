import Nav from "./components/nav";
import Main from "./components/Main/main";
import CallToAction from "./components/Main/callToAction";
import About from "./components/about";
import SkillsAbout from "./components/skillsAbout";
import Works from "./components/works/works";
import Footer from "./components/Main/footer";
import Contact from "./components/contact";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useRef } from "react";

function App() {
  const worksRef = useRef(null);

  return (
    <>
      <Nav workRefRecive={worksRef} />
      <Routes>
        <Route
          path="/portfolioross"
          element={
            <>
              <Main />
              <SkillsAbout />
              <Works worksRefProp={worksRef} />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <>
              <About />
              <CallToAction />
              <Footer />
            </>
          }
        ></Route>
        <Route path="/trabajos" element={<Works />}></Route>
        <Route
          path="/contacto"
          element={
            <>
              <Contact />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
