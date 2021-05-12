import React, { Component } from 'react';
import axios from 'axios';

class ProfileCountry extends Component {

    componentWillUnmount(){
        const name = this.props.match.params.name;
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
