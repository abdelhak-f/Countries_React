import React, { Component } from 'react'

class Country extends Component {
  render() {
    return (
      <>
         <div className="card">
                   <img className="card-img-top" src= {this.props.country.flag}  alt="" />
                   <div className="card-body">
                       <h4 className="card-title">{this.props.country.name}</h4>
                       <p className="card-text">
                           <a href= {this.props.country.code} className="btn btn-success ">show more</a>
                           <a href={this.props.country.regionalBlocs} className="btn btn-success ">profile</a>
                       </p>
                   </div>
                   </div>
      </>
    )
  }
}

export default Country
