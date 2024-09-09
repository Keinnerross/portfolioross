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
import { useState } from "react";
import "./App.css";
import { useRef } from "react";

function App() {
  const [lightMode, setLightMode] = useState(false);

  const handleLightMode = () => {
    setLightMode(!lightMode);
  };

  const worksRef = useRef(null);
  const resourceRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const timerScroll = () => {
    setTimeout(() => {
      worksRef.current.scrollIntoView({
        scrollBehavior: "smooth",
      });
    }, 300);
  };

  const timerScrollAbout = () => {
    setTimeout(() => {
      aboutRef.current.scrollIntoView({
        scrollBehavior: "smooth",
      });
    }, 400);
  };

  const timerScrollResources = () => {
    setTimeout(() => {
      resourceRef.current.scrollIntoView({
        scrollBehavior: "smooth",
      });
    }, 400);
  };

  const timerScrollTop = () => {
    console.log("runns");
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 400);
  };

  return (
    <div className="w-screen flex flex-col items-center">
      <div className="w-[95vw] md:max-w-[80vw]">
        <Nav
          worksScroll={timerScroll}
          resourceScroll={timerScrollResources}
          aboutScroll={timerScrollAbout}
          topScroll={timerScrollTop}
          handleLightMode={handleLightMode}
          lightMode={lightMode}
        />
        <Routes>
          <Route
            path="/portfolioross"
            element={
              <>
                <Main isLightMode={lightMode} />
                <SkillsAbout />
                <Works worksRefProp={worksRef} />
              </>
            }
          ></Route>
          <Route
            path="/about"
            element={
              <>
                <About aboutRefProp={aboutRef} worksScroll={timerScroll} />
                <Resources resRefProp={resourceRef} />
              </>
            }
          ></Route>
          <Route path="/trabajos" element={<Works />}></Route>
          <Route
            path="/contact"
            element={
              <>
                <Contact refContact={contactRef} />
              </>
            }
          ></Route>
        </Routes>
        <Footer
          worksScroll={timerScroll}
          resourceScroll={timerScrollResources}
          aboutScroll={timerScrollAbout}
          topScroll={timerScrollTop}
        />
      </div>
    </div>
  );
}

export default App;
