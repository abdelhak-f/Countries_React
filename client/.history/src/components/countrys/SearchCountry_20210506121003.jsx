import React, { Component } from 'react'

class SearchCountry extends Component {
    state = {
        search : 'salam'
    }
  render() {
    return (
      <>
        <form >
            <div className="form-group ">
                <input placeholder='Search countries ...' id="search" type="text" className="form-control"/>
                </div>
                <button className="btn btn-danger">Search</button>
        </form>
      </>
    )
  }
}

export default SearchCountry
