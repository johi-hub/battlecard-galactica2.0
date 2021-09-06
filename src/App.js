import '../src/css/App.css';
import LandingPage from './pages/LandingPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Discussion from './pages/Discussion';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={ LandingPage }/>
          <Route path="/home" component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/discussion" component={ Discussion } />
        </Switch>
      </Router>
    </>
  );
}

export default App;
