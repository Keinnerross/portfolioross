import './App.css';
import Nav from './components/nav';
import FrontMain from './components/frontMain';
import About from './components/about';
import Skills from './components/skills';
import Works from './components/works';
import Footer from './components/footer';



function App() {
  return (
    <>
     <Nav></Nav>
     <FrontMain></FrontMain>
     <About></About>
     <Skills></Skills>
     <Works></Works>
     <Footer></Footer>
    </>
  );
}

export default App;
