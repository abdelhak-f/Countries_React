import React, { Component } from 'react';
// import axios from 'axios';
import Country from './Country'

class ProfileCountry extends Component {

componentWillMount() {
   const name = this.props.match.params.name;
   axios.get(`https://restcountries.eu/rest/v2/name/${name}`)
}
    
  render() {
    return (
      <div>
          <Country />
          <h1>hello from profil country components</h1>
      </div>
    )
  }
}

export default ProfileCountry 
