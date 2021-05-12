// import React, { Component } from 'react';
// import {BrowserRouter as Router, Route, Link, useHistory} from "react-router-dom";
// // import {browserHistory} from 'react-router';


//  const Country = () => {
//   const history = useHistory();
//   const handleClick = () => history.push('/')
  
//     return (
      
//          <div className="card">
//                    <img className="card-img-top" src= {this.props.country.flag}  alt="" />
//                    <div className="card-body">
//                    <h4 className="card-title">{this.props.country.alpha2Code} | {this.props.country.alpha3Code}</h4>
//                        <p className="card-text">
                        
//                            <button onClick={handleClick} className="btn btn-success ">show more</button>
                          
//                            {/* <a href={this.props.country.regionalBlocs} className="btn btn-success ">profile</a> */}
//                        </p>
//                    </div>
//                    </div>
      
//     )
  
// }

// export default Country

import { useHistory } from 'react-router-dom';

const ExampleComponent = () => {
  const history = useHistory();
  const handleClick = () => history.push('/some-route');
  
  return (
    <button type="button" onClick={handleClick}>
      Navigate to another route
    </button>
  );
};