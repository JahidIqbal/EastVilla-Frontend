import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';



function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/home">
            <Home />
          </Route>

          <Route path="/buynow/:id">
            <ServiceDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
