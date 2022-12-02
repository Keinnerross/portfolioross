import "./App.css";
import Nav from "./components/nav";
import FrontMain from "./components/frontMain";
import About from "./components/Main/main";
import Skills from "./components/skills";
import Works from "./components/works";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <About /> <Works />
            </>
          }
        ></Route>
        <Route path="/about" element={<Skills />}></Route>
        <Route path="/trabajos" element={<Works />}></Route>
        <Route path="/contacto" element={<Footer />}></Route>
      </Routes>
    </>
  );
}

export default App;
