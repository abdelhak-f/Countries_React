import  React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Countries from  './components/AllCountries';
import  Navbar from './components/partials/Navbar';
import ProfilCountry from './components/countrys/ProfilCountry'

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      {/* <ProfilCountry /> */}
      <div className="container">
        <Switch>
          <Route exact path="/AllCountries" components={Countries} />
          <Route exact path="/AllCountries" components={ProfilCountry} />
          <Route exact components={Countries} />
        </Switch>
             {/* <Countries /> */}
      </div>

    </div>
    </Router>
  );
}
 
export default App;
