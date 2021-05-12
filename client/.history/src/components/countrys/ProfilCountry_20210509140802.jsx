import React, { Component } from 'react';
import axios from 'axios';

class ProfileCountry extends Component {

    
    
  render() {
    return (
      <div>
          <div className="row   my-2">
              <div className="col-md-12">
      
              </div>
          </div>
          <div className="row">
        {/* {this.state.countries.map (country => ( */}
            <div className="col-md-4 mt-3 key={name.id}">
              <div className="card">
                   <img className="card-img-top" src= {this.props.country.flag}  alt="" />
                   <div className="card-body">
                   <h4 className="card-title">{this.props.country.alpha2Code} | {this.props.country.alpha3Code}</h4>
                       <p className="card-text">
                           {/* <a href= "/ProfilCountry" className="btn btn-success ">show more</a> */}
                           {/* <a href={this.props.country.regionalBlocs} className="btn btn-success ">profile</a> */}
                       </p>
                   </div>
                   </div>
               </div>
        {/* ))} */}
        </div>
      </div>
    )
  }
}

export default ProfileCountry 
