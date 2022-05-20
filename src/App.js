import './App.css';
import {Blog, Curriculum, Footer, Landing, Main, Projects} from './components'

function App() {
  return (
    <div className="App">
      <Landing />
      <Main />
      <Curriculum />
      <Projects />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
