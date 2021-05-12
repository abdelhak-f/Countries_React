import  React from 'react';
import './App.css';
import Countries from  './components/AllCountries';
import  Navbar from './components/partials/Navbar';
import ProfileCountry from './components/countrys/ProfilCountry'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
    <div className="App">

      <Navbar />

      <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/ProfileCountry" component={Countries}/>
            
      {/* <div className="container">
        <Route path="/ProfileCountry">
      <ProfileCountry/>
        </Route>
             <Countries />
      </div> */}

    </div>
    </Switch>
    </Router>
  );
}
 
export default App;
