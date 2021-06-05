import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Building from './components/Building';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Home/>
      <Nav/>
      <About/>
      <Projects/>
      {/* <Building/> */}
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
