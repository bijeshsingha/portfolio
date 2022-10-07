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

  return (
    <div className="container">
      <Navbar state={state} setState={setState}/>
      <div className="main-content">
        {(state===0 || state===1) && <><Home/><Projects/></>}
        {state===2 && <About/>}
        {state===3 && <Contact/>}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
