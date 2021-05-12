import  React from 'react';
import './App.css';
import Countries from  './components/AllCountries';
import  Navbar from './components/partials/Navbar';
import ProfileCountry from './components/countrys/ProfilCountry'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />    
      <div className="container">
      <Switch>
       <Route exact path="/" component={Countries} />
       <Route path="/" component={ProfileCountry}/>
      {/* <ProfileCountry/>
      <Countries /> */}
    </Switch>
      </div>
    </div>
    </Router>
  );
}
 
export default App;
