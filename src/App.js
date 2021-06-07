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

  const [showModal, setShowModal] = useState(null);

  const closeModalHandler = () => setShowModal(null);

  return (
    <div className="App">
      {showModal ? <div className="back-drop"
      onClick={closeModalHandler}></div> : null}
      <Modal showModal={showModal} close={closeModalHandler}/>
      <Home/>
      <Nav/>
      <About/>
      <Projects setShowModal={setShowModal}/>
      <Modal/>
      {/* <Building/> */}
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
