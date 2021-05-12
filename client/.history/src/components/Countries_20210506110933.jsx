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
          
        ))}
        </div>
      </div>
    )
  }
}

export default Countries 
