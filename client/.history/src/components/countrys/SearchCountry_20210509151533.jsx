import React, { Component } from 'react'

class SearchCountry extends Component {
    state = {
        search : ''
    }
      = (e) => {
        this.setState({
            search:e.target.value
        })
    }

    searchCountries= (e) => {
        e.preventDefault();
        this.props.getCountrySearch(this.state.search)
    }
  render() {
      const {search} = this.state;
    return (
      
        <form onSubmit={this.searchCountries}>
            <div className="form-group ">
                <input onChange={this.handleForm} value={search} placeholder='Search countries ...' id="search" type="text" className="form-control"/>
                </div>
                {/* {search} */}
                <button className="btn btn-danger">Search</button>
        </form>
      
    )
  }
}

export default SearchCountry
