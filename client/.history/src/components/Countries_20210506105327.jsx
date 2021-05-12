import React, { Component } from 'react';
import axios from 'axios';

class Countries extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             countries: [
                 {
                     
                 }
             ]
        }
    }
    getCountry = () => {
        axios.get('https://restcountries.eu/rest/v2/all')
                       .then(response => {
                           this.setState({
                            countries: response.data
                           })
                       })
    }
    componentDidMount() {
        this.getCountry();
    }
    
  render() {
    return (
      <div>
          <div className="row">
        {this.state.countries.map (country => (
            <div className="col-md-4">
               <div className="card">
                   <img className="card-img-top" src= {countries.flag}  alt="" />
                   <div className="card-body">
                       <h4 className="card-title">{countries.title}</h4>
                       <p className="card-text">
                           <a href= {countries.profil} className="btn-success btn">show more</a>
                           <a href={countries.profil} className="btn-success btn">profile</a>
                       </p>
                   </div>
                   </div>
               </div>
        ))}
        </div>
      </div>
    )
  }
}

export default Countries 
