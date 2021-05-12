import  React from 'react'
import './App.css';
import Countries from  './components/Countries'
import  Navbar from './components/partials/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="container">
             <Countries />
      </div>

    </div>
  );
}
 
export default App;
