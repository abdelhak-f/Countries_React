import React, { Component } from 'react';
import axios from 'axios';

class ProfileCountry extends Component {

    componentWillUnmount(){
        const name = this.props.match.params.name;
        axios.get({})
    }
    
  render() {
    return (
      <div>
          <country />
      </div>
    )
  }
}

export default ProfileCountry 
