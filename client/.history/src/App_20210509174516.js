import  React from 'react';
import './App.css';
import Countries from  './components/AllCountries';
import  Navbar from './components/partials/Navbar';
import ProfileCountry from './components/countrys/ProfilCountry'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <switch>
    <div className="App">
      <Navbar />
      
      <div className="container">
      <ProfileCountry/>
             <Countries />
      </div>

    </div>
    </switch>
    </Router>
  );
}
 
export default App;
