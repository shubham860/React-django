import React from 'react'
import PropTypes from 'prop-types'
import axios from axios

class Fetch extends React.Component {
  constructor(){
    super()
    this.state = {
      firstname : '',
      lastname : ''
    }
  }



  fetch = event => {
     axios
        .get(`/employee/`)
  }
  render () {
    return(
      <button onClick={this.fetch}>Fetch</button>
  )}
}

export default Fetch;
