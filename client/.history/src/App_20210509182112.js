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

      <Route path="/" component={Countries} exact/>
             <Route path="/" component={Countries}/>
             <Route path="/ProfileCountry" component={ProfileCountry}/>
            
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
