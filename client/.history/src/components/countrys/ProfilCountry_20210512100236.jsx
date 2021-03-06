// import React, { Component } from 'react';
// import axios from 'axios';
// import Country from './Country'

// class ProfileCountry extends Component {
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
//           {/* <Country country={this.state.country} /> */}
//           <h1>hello from profil country components</h1>
//       </div>
//     )
//   }
// }

// export default ProfileCountry 



  
import React, { useState, useEffect } from 'react';
import axios from 'axios'

const ProfileCountry = (props) => {
    const name = props.location.pathname;
    const capital = name.split('/')[2];

    const [output, setOutput] = useState('')
    const onsubmit = async () => {

        const res = await axios.get(`https://restcountries.eu/rest/v2/name/${capital}`)
        setOutput(res.data[0])


    }
    console.log(output)
    useEffect(() => {
        onsubmit()
    }, [])

    return (
        <div className="container col-8 p-5 mt-5 " >
            {output && (
                <>

                    <div className='card'>
                        <div >
                            <img src={output.flag} alt="flag" className="card-img-top" />
                            <h2 className="card-text my-2 ml-2 text-success">{output.name} </h2>
                        </div>
                        <div className='col-4 text-info' >
                            <div className="d-flex"> <span className="text-muted"><b>nativeName :  </b></span> <p> {output.nativeName}</p></div>
                            <div className="d-flex"><b>region: </b> &nbsp;<p> {output.region} </p></div>
                            <div className="d-flex"><b>capital: </b> &nbsp;<p> {output.capital} </p></div>
                            <div className="d-flex"><b>Calling code: </b> &nbsp;<p> {output.callingCodes} </p> </div>
                            <div className="d-flex"> <b>alpha3Code: </b> &nbsp;<p> {output.alpha3Code} </p></div>
                            <div className="d-flex"><b>population: </b> &nbsp;<p> {output.population} </p></div>
                        </div>
                    </div>
                </>
            )}
        </div>

    );
}

export default ProfileCountry;