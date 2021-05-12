import React, { Component } from 'react'

class Country extends Component {
  render() {
    return (
      <>
         <div className="card">
                   <img className="card-img-top" src= {country.flag}  alt="" />
                   <div className="card-body">
                       <h4 className="card-title">{country.name}</h4>
                       <p className="card-text">
                           <a href= {country.code} className="btn-success btn">show more</a>
                           <a href={country.regionalBlocs} className="btn-success btn">profile</a>
                       </p>
                   </div>
                   </div>
      </>
    )
  }
}

export default Country
