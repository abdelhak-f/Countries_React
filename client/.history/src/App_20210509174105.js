import  React from 'react';
import './App.css';
import Countries from  './components/AllCountries';
import  Navbar from './components/partials/Navbar';
import ProfileCountry from './components/countrys/ProfilCountry'
import { Router } from 'react-router';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <ProfileCountry/>
      <div className="container">
             <Countries />
      </div>

    </div>
    </Router>
  );
}
 
export default App;
