import Nav from "./components/nav";
import Main from "./components/Main/main";
import CallToAction from "./components/Main/callToAction";
import About from "./components/about";
import Resources from "./components/Resoucers/resourcesMain";
import SkillsAbout from "./components/skillsAbout";
import Works from "./components/works/works";
import Footer from "./components/Main/footer";
import Contact from "./components/contact";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useRef } from "react";

function App() {
  const worksRef = useRef(null);
  const resourceRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <>
      <Nav
        workRefRecive={worksRef}
        resRefRecive={resourceRef}
        aboutRefRecive={aboutRef}
      />
      <Routes>
        <Route
          path="/portfolioross"
          element={
            <>
              <Main />
              <SkillsAbout />
              <Works worksRefProp={worksRef} />
            </>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <>
              <About aboutRefProp={aboutRef} />
              <Resources resRefProp={resourceRef} />
            </>
          }
        ></Route>
        <Route path="/trabajos" element={<Works />}></Route>
        <Route
          path="/contact"
          element={
            <>
              <Contact />
            </>
          }
        ></Route>
      </Routes>
      <Footer workRef={worksRef} />
    </>
  );
}

export default App;
