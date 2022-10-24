import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';


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
        {(state === 0 || state === 1) && <><Home width={width} /><Projects width={width}/></>}
        {state === 2 && <About setState={setState}/>}
        {state === 3 && <Contact state={state}/>}
        <Footer/>
      </div>
    </div>
  );
}

export default App;
