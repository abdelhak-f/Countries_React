import React, { Component } from 'react';
import { Link } from 'react-router-dom';


  class Country extends Component{
    constructor(props) {
      super(props);
      this.state = {};
      // console.log(props.data);
    }
  
  render() {
    return (
      <>
         <div className="card">
                   <img className="card-img-top" src= {this.props.country.flag}  alt="" />
                   <div className="card-body">
                   <h4 className="card-title">{this.props.country.alpha2Code} | {this.props.country.alpha3Code}</h4>
                       <p className="card-text">
                        
                           <Link to={'/ProfilCountry/'} className="btn btn-success">show more</Link>
                           
                           {/* <a href={this.props.country.regionalBlocs} className="btn btn-success ">profile</a> */}
                       </p>
                   </div>
                   </div>
      </>
    )
    }
  }


export default Country ;
