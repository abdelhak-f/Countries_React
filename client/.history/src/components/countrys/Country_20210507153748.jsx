import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {browserHistory} from 'react-router';


class Country extends Component {
  onNavigateProfil(){
    browserHistory.push("/ProfilCountry")
  }
  render() {
    return (
      <>
         <div className="card">
                   <img className="card-img-top" src= {this.props.country.flag}  alt="" />
                   <div className="card-body">
                   <h4 className="card-title">{this.props.country.alpha2Code} | {this.props.country.alpha3Code}</h4>
                       <p className="card-text">
                         <Router>
                           <Link to= "/ProfilCountry" className="btn btn-success ">show more</Link>
                           </Router>
                           {/* <a href={this.props.country.regionalBlocs} className="btn btn-success ">profile</a> */}
                       </p>
                   </div>
                   </div>
      </>
    )
  }
}

export default Country
