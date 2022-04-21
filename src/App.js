import '../src/css/App.css';
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Discussion from './pages/Discussion';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <LandingPage/> }/>
          <Route path="/home" element={ <Home/> } />
          <Route path="/about" element={ <About/> } />
          <Route path="/discussion" element={ <Discussion/> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
