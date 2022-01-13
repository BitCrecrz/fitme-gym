import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  } from "react-router-dom";
import About from './components/About';
import Homepage from './components/Homepage';
import Pt from './components/Pt';
import Contact from './components/Contact';
import Bap from './components/Bap';
import Login from './components/Login';

function App() {
  return (
    <div className="App" style={{background: '#e4e4e4'}}>
      <Router>
      <Alert/>
      <Navbar />
      <Switch>
          <Route path="/home">
            <Homepage />
          </Route>
          <Route path="/pt">
            <Pt />
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/partner">
            <Bap />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        <Redirect to={"/home"}/>
        </Switch>
        </Router>

    </div>
  );
}

export default App;
