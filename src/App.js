import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Building from './components/Building';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Projects/>
      <Building/>
      <Contact/>
    </div>
  );
}

export default App;
