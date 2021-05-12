import React, { Component } from 'react';
import axios from 'axios';
import Country from '../AllCountries'

class ProfileCountry extends Component {


    
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
