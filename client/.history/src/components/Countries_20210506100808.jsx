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
               <div class="card">
                   <img class="card-img-top" src= {countries.login}  alt="">
                   <div class="card-body">
                       <h4 class="card-title">{countries.title}</h4>
                       <p class="card-text">
                           <a href= {countries.profil} className="btn-success btn"></a>
                           <a href="" className="btn-success btn"></a>
                       </p>
                   </div>
               </div>
        ))}
      </>
    )
  }
}

export default Countries
