import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Home from './pages/Home';
import {Routes, Route, Link} from 'react-router-dom'


function App() {


  

  const [state, setState] = React.useState(0)
  const [width, setWidth] = React.useState(window.innerWidth)
  const [isMenu,setIsMenu] = React.useState(false)
  const watchWidth = () => {
    setWidth(window.innerWidth);
    if(window.innerWidth > 1064){
      setIsMenu(false)
    }
  };
  React.useEffect(() => {
    window.addEventListener("resize", watchWidth);

    return () => {
      window.removeEventListener("resize", watchWidth);
    };
  }, []);

  return (
    <div className="container">
      <Navbar state={state} setState={setState} width={width} setIsMenu={setIsMenu} isMenu={isMenu}/>
      <div className={`${isMenu && "hide"} main-content`}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
