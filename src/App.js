import React, { useState } from "react";
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
// import Building from './components/Building';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';



function App() {

  const [modal, setModal] = useState(null);

  const closeModalHandler = () => setModal(null);

  return (
    <div className="App">
      {modal !== null
        ? <div className="back-drop"
        onClick={closeModalHandler}>
        <Modal modal={modal} close={closeModalHandler}/></div>
        : null
      }
      <Home/>
      <Nav/>
      <About/>
      <Projects setModal={setModal}/>
      {/* <Building/> */}
      <Contact/>
      <Footer/>
      {/* <Modal/> */}
    </div>
  );
}

export default App;
