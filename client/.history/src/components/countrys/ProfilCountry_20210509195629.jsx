import React, { Component } from 'react';
import axios from 'axios';
import Country from './Country'

class ProfileCountry extends Component {

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


//     state = {
//         country: {}
//     }

// componentWillMount() {
//    const name = this.props.match.params.name;
//    axios.get(`https://restcountries.eu/rest/v2/${name}`)
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

render() {
    return (
      <>
         <div className="card">
                   <img className="card-img-top" src= {this.props.country.flag}  alt="" />
                   <div className="card-body">
                   <h4 className="card-title">{this.props.country.alpha2Code} | {this.props.country.alpha3Code}</h4>
                       <p className="card-text">
                        
                           {/* <Link to={'/country' +this.props.country.name} className="btn btn-success">show more</Link> */}
                           
                           {/* <a href={this.props.country.regionalBlocs} className="btn btn-success ">profile</a> */}
                       </p>
                   </div>
                   </div>
      </>
    )
    }
  
}

export default ProfileCountry 
