import  React from 'react'
import './App.css';
import Countries from  './components/Countries'

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
