import React, { Component } from 'react'

class SearchCountry extends Component {
  render() {
    return (
      <>
        <form >
            <div className="form-group">
                <label htmlFor=""></label>
                <input type="text" className="form-control"/>
                </div>
                <button className="btn btn-danger">Search</button>
        </form>
      </>
    )
  }
}

export default SearchCountry
