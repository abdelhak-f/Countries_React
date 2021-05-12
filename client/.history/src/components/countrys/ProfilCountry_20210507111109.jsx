import React from 'react'

const componentName = () => {
  return (
    <>
      <div className="card-body">
                   <h4 className="card-title">{this.props.country.alpha2Code} | {this.props.country.alpha3Code}</h4>
                       <p className="card-text">
                           <a href= "" className="btn btn-success ">show more</a>
                           {/* <a href={this.props.country.regionalBlocs} className="btn btn-success ">profile</a> */}
                       </p>
                   </div>
    </>
  )
}

export default componentName
