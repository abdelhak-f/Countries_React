import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';


  class Country extends Component{
    const history = useHistory();
    const navigateTo = () => history.push('/ProfilCountry');
  
  render() {
    return (
      <>
         <div className="card">
                   <img className="card-img-top" src= {this.props.country.flag}  alt="" />
                   <div className="card-body">
                   <h4 className="card-title">{this.props.country.alpha2Code} | {this.props.country.alpha3Code}</h4>
                       <p className="card-text">
                        
                           <button className="btn btn-success " onClick={navigateTo}>show more</button>
                           
                           {/* <a href={this.props.country.regionalBlocs} className="btn btn-success ">profile</a> */}
                       </p>
                   </div>
                   </div>
      </>
    )
    }
  }


export default Country ;
