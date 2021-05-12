// import React, { Component } from 'react';
// import {BrowserRouter as Router, Route, Link, browserHistory} from "react-router-dom";
// // import {browserHistory} from 'react-router';


// class Country extends Component {
//   onNavigateProfil(){
//     browserHistory.push("/ProfilCountry")
//   }
//   render() {
//     return (
//       <>
//          <div className="card">
//                    <img className="card-img-top" src= {this.props.country.flag}  alt="" />
//                    <div className="card-body">
//                    <h4 className="card-title">{this.props.country.alpha2Code} | {this.props.country.alpha3Code}</h4>
//                        <p className="card-text">
//                          <Router>
//                            <button to= "/ProfilCountry" className="btn btn-success ">show more</button>
//                            </Router>
//                            {/* <a href={this.props.country.regionalBlocs} className="btn btn-success ">profile</a> */}
//                        </p>
//                    </div>
//                    </div>
//       </>
//     )
//   }
// }

import { useHistory } from 'react-router-dom';

const Country = () => {
  const history = useHistory();
  const handleClick = () => history.push('/some-route');
  
  return (
    <div className="card">                    <img className="card-img-top" src= {this.props.country.flag}  alt="" />                  <div className="card-body">
                   <h4 className="card-title">{this.props.country.alpha2Code} | {this.props.country.alpha3Code}</h4>                       <p className="card-text">                         <Router>                           <button to= "/ProfilCountry" className="btn btn-success ">show more</button>                            </Router>                            {/* <a href={this.props.country.regionalBlocs} className="btn btn-success ">profile</a> */}                        </p>                    </div>                    </div>
    <button type="button" onClick={handleClick}>
      Navigate to another route
    </button>
  );
};

export default Country
