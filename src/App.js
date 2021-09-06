import '../src/css/App.css';
import Hero from './components/Hero';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={ Hero }/>
          <Route path="/home" component={ Home } />
        </Switch>
      </Router>
    </>
  );
}

export default App;
