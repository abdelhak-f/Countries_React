import React, { Component } from 'react';
import  Country  from  './countrys/Country';
import SearchCountry from './countrys/SearchCountry';
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
          <div className="row my-2">
              <div className="col-md-12">
       <SearchCountry  />
              </div>
          </div>
          <div className="row">
        {this.state.countries.map (country => (
            <div className="col-md-4 mt-3">
              <Country  country={country} />
               </div>
        ))}
        </div>
      </div>
    )
  }
}

export default Countries 
