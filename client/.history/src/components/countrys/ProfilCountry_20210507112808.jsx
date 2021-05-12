import React from 'react'

const ProfileCountry = () => {
  return (
    <>
      <div className="card-body">
               <img className="card-img-top" src= {this.props.country.flag}  alt="" />
                   <h4 className="card-title">{this.props.country.alpha2Code} | {this.props.country.alpha3Code}</h4>
                       <p className="card-text">
                           
                           {/* <a href={this.props.country.regionalBlocs} className="btn btn-success ">profile</a> */}
                       </p>
                   </div>
    </>
  )
}

export default ProfileCountry
