import React, { Component } from 'react'

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
    
  render() {
    return (
      <>
        {this.statement.countries.map (country => (
               <div className="card">
                   <img className="card-img-top" src= {countries.login}  alt="">
                   <div className="card-body">
                       <h4 className="card-title">{countries.title}</h4>
                       <p className="card-text">
                           <a href= {countries.profil} className="btn-success btn">show more</a>
                           <a href={countries.profil} className="btn-success btn">profile</a>
                       </p>
                   </div>
               </div>
        ))}
      </>
    )
  }


export default Countries
