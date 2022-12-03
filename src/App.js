import "./App.css";
import Nav from "./components/nav";
import Main from "./components/Main/main";
import About from "./components/about";
import Works from "./components/works/works";
import Footer from "./components/Main/footer";
import Contact from "./components/contact";
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
              <Main />
              <Works />
              
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <>
              <About />
              <Footer />
            </>
          }
        ></Route>
        <Route path="/trabajos" element={<Works />}></Route>
        <Route path="/contacto" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
