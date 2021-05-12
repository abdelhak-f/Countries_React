import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, useRouter} from "react-router-dom";
import {useHistory} from 'react-router-dom';


  class Country extends Component{
   
  constructor =(props)=> {
    super(props)

    this.state = {
         countries: [
             {
                 
             }
         ]
    }
}
// getCountry = () => {
//     axios.get(`https://restcountries.eu/rest/v2/all`)
//                    .then(response => {
//                        this.setState({
//                         countries: response.data
//                        })
//                    })
// }
// componentDidMount() {
//     this.getCountry();
// }

  const history = useHistory();
  function handleClick  (){
     history.push('/goodbye');

  }
    return (
      <>
         <div className="card">
                   <img className="card-img-top" src= {this.props.country.flag}  alt="" />
                   <div className="card-body">
                   <h4 className="card-title">{this.props.country.alpha2Code} | {this.props.country.alpha3Code}</h4>
                       <p className="card-text">
                        
                           <button onClick={handleClick}className="btn btn-success ">show more</button>
                           
                           {/* <a href={this.props.country.regionalBlocs} className="btn btn-success ">profile</a> */}
                       </p>
                   </div>
                   </div>
      </>
    )
  
  }


export default Country ;
