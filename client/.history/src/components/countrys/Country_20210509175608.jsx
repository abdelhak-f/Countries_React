import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';


  const Country = (props) =>{
    const history = useHistory();
  
    return (
      <>
         <div className="card">
                   <img className="card-img-top" src= {this.country.flag}  alt="" />
                   <div className="card-body">
                   <h4 className="card-title">{this.country.alpha2Code} | {this.country.alpha3Code}</h4>
                       <p className="card-text">
                        
                           <button onClick={() => history.push('/ProfilCountry')} className="btn btn-success ">show more</button>
                           
                           {/* <a href={this.props.country.regionalBlocs} className="btn btn-success ">profile</a> */}
                       </p>
                   </div>
                   </div>
      </>
    )
    }
  


export default Country ;
