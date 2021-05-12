import  React from 'react';
import './App.css';
import Countries from  './components/Countries';
import  Navbar from './components/partials/Navbar';
import ProfileCountry from './components/countrys/ProfilCountry'

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProfilCountry />
      <div className="container">
             <Countries />
      </div>

    </div>
  );
}
 
export default App;
