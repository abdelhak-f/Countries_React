
import React, { Component } from 'react'

export class ProfilCountry extends Component {

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

    render() {
        return (
            <div className="card-body">
            <img className="card-img-top" src= {this.props.country.flag}  alt="" />
                <h4 className="card-title">{this.props.country.alpha2Code} | {this.props.country.alpha3Code}</h4>
                    <p className="card-text">
                        
                        {/* <a href={this.props.country.regionalBlocs} className="btn btn-success ">profile</a> */}
                    </p>
                </div>
        )
    }
}

export default ProfilCountry
