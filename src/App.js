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
  const [width, setWidth] = React.useState(window.innerWidth);
  const watchWidth = () => {
    setWidth(window.innerWidth);
  };
  React.useEffect(() => {
    window.addEventListener("resize", watchWidth);

    return () => {
      window.removeEventListener("resize", watchWidth);
    };
  }, []);
  React.useEffect(()=>window.scrollTo(0,0),[])

  return (
    <div className="container">
      <div className="main-content">
        <Navbar state={state} setState={setState} width={width}/>
        {(state === 0 || state === 1) && <><Home width={width}/><Projects/></>}
        {state === 2 && <About setState={setState}/>}
        {state === 3 && <Contact />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
