import React, { Component } from 'react';
import  Country  from  './countrys/Country';
import SearchCountry from './countrys/SearchCountry';
import axios from 'axios';

  const Countries = () => {

    constructor(props) ;{
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
    componentDidMount() ;{
        this.getCountry();
    }
    searchCountryFromGet =(data) => {
         if(data != ''){
              axios.get(`https://restcountries.eu/rest/v2/name/{name}{data}`)
              .then(response => {
                  console.log(response)
              })
         }
    }
    
  render() ;{
    return (
      <div>
          <div className="row   my-2">
              <div className="col-md-12">
       <SearchCountry getCountrySearch={this.searchCountryFromGet } />
              </div>
          </div>
          <div className="row">
        {this.state.countries.map (country => (
            <div className="col-md-4 mt-3 key={name.id}">
              <Country  country={country} />
               </div>
        ))}
        </div>
      </div>
    )
  }
}

export default Countries 
