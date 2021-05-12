import React, { Component } from 'react';
import axios from 'axios';
import Country from './Country'

class ProfileCountry extends Component {
//     state = {
//         country: {}
//     }

// componentWillMount() {
//    const name = this.props.match.params.name;
//    axios.get(`https://restcountries.eu/rest/v2/name/${name}`)
//         .then(res => {
//             this.setState({
//                 country: res.data
//             })
//         })
// }


    
//   render() {
//     return (
//       <div>
//           <Country country={this.state.country} />
//           <h1>hello from profil country components</h1>
//       </div>
//     )
//   }

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
    axios.get(`https://restcountries.eu/rest/v2/all`)
                   .then(response => {
                       this.setState({
                        countries: response.data
                       })
                   })
}
componentDidMount() {
    this.getCountry()
}
searchCountry =( data) => {
     if(data != ''){
          axios.get(`https://restcountries.eu/rest/v2=${data}`)
          .then(response => {
            this.setState({
              countries: response.data.items

            })
          })
     }
}

render() {
return (
  <div>
      <div className="row   my-2">
          <div className="col-md-12">
   <SearchCountry getCountrySearch={this.searchCountry} />
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

export default ProfileCountry 
