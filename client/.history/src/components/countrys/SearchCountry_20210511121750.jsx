// import React, { Component } from 'react'

// class SearchCountry extends Component {
//     state = {
//         search : ''
//     }
//     handleForm  = (e) => {
//         this.setState({
//             search:e.target.value
//         })
//     }

//     searchCountries= (e) => {
//         e.preventDefault();
//         this.props.getCountrySearch(this.state.search)
//     }
//   render() {
//       const {search} = this.state;
//     return (
      
//         <form onSubmit={this.searchCountries}>
//             <div className="form-group ">
//                 <input onChange={this.handleForm} value={search} placeholder='Search countries ...' id="search" type="text" className="form-control"/>
//                 </div>
//                 {/* {search} */}
//                 <button className="btn btn-danger">Search</button>
//         </form>
      
//     )
//   }
// }

// export default SearchCountry

/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */

import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const SearchCountry = ({ alpha3Code, alpha2Code, flag, name}) => {

    const [Data, setData] = useState([])
    const [input, setInput] = useState('')
    const [output, setOutput] = useState([])

    // get data
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])

    // filter data

    useEffect(() => {
        setOutput([])
        Data.filter(val => {
            if (val.alpha3Code.toUpperCase().includes(input.toUpperCase())) {
                setOutput(output => [...output, val])
            }
        })

    }, [input]);

    return (
        <div>
            <div className="container-fluid w-25 p-3">
                <form className="d-flex">
                    <input onChange={e => setInput(e.target.value)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>

            <div className="container countries">
                {SearchCountry && output.map((res, index) => (
                    <>
                        <div key={index} className='countainer'>
                            <div className="country-image">
                                <img src={res.flag} alt="flag" />
                            </div>
                             <div className='country-detail'>
                                <p>{res.alpha3Code} </p>
                                <p>{res.alpha2Code}</p>
                                <Link to={`/ShowCoun/${res.name}`}>
                                    <button className="btn btn-primary">show more</button>
                                </Link>

                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
}

export default SearchCountry;
