import  React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Countries from  './components/AllCountries';
import  Navbar from './components/partials/Navbar';
import ProfilCountry from './components/countrys/ProfilCountry'

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <ProfilCountry /> */}
      <div className="container">
             <Countries />
      </div>

    </div>
  );
}
 
export default App;
