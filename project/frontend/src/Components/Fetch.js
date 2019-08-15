import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

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
       .then(response =>{
           console.log(response.data)
           var array = response.data
           this.setState({
             firstname : array[0].firstname,
             lastname : array[0].lastname
           })
           })
       .catch(error => {
           alert('Error in fetching data')
         })
  }
  render () {
    return(
     <div>
      <button onClick={this.fetch}>Fetch</button>
        <table>
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{firstname}</td>
              <td>{lastname}</td>
            </tr>]
          </tbody>  
        </table>
       </div>
  )}
}

export default Fetch;
