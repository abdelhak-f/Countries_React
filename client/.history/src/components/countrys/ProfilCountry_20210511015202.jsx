import React, { Component } from 'react';
import axios from 'axios';
import Country from './Country'

class ProfileCountry extends Component {
    state = {
        country: {}
    }

componentWillMount() {
   const {name} = this.props.match.params.name;
   axios.get(`https://restcountries.eu/rest/v2/all/${name.params}`)
        .then(response => {
            this.setState({
                country: response.data,
            })
        })
}
    
  render() {
    return (
      <div>
          <Country country={this.state.country} />
          <h1>hello from profil country components</h1>
      </div>
    )
  }
}

export default ProfileCountry 
