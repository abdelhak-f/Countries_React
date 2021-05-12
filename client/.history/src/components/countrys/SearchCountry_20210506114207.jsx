import React, { Component } from 'react'

class SearchCountry extends Component {
  render() {
    return (
      <>
        <form >
            <div className="form-group">
                <label htmlFor="search"></label>
                <input id="search" type="text" className="form-control"/>
                </div>
                <button className="btn btn-danger">Search</button>
        </form>
      </>
    )
  }
}

export default SearchCountry
