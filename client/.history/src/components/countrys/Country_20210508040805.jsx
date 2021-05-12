import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, useHistory} from "react-router-dom";
// import {browserHistory} from 'react-router';


 const Country = () => {
  const history = useHistory();
  constructor(props); {
    super(props)

    this.state = {
         countries: [
             {
                 
             }
         ]
    }
}
getCountry = () => {
    axios.get(`https://restcountries.eu/rest/v2/all`)
                   .then(response => {
                       this.setState({
                        countries: response.data
                       })
                   })
}
  
    return (
      <>
         <div className="card">
                   <img className="card-img-top" src= {this.props.country.flag}  alt="" />
                   <div className="card-body">
                   <h4 className="card-title">{this.props.country.alpha2Code} | {this.props.country.alpha3Code}</h4>
                       <p className="card-text">
                        
                           <button onClick={() => history.push('/ProfileCountry')}className="btn btn-success ">show more</button>
                           
                           {/* <a href={this.props.country.regionalBlocs} className="btn btn-success ">profile</a> */}
                       </p>
                   </div>
                   </div>
      </>
    )
  }


export default Country
