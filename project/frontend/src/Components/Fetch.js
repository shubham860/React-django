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
           var x = response.data
          for(let i=0;i<x.length;i++){
             this.setState({
               firstname : x[i].firstname,
               lastname : x[i].lastname
             })}
         })
       .catch(error => {
           alert('Error in fetching data')
         })
  }
  render () {
    const {firstname,lastname} = this.state
    return(
     <div class='container'><br/><br/>
      <div class='row'>
        <a class="waves-effect waves-light btn-small " onClick={this.fetch}>Fetch</a>
      </div><br/><br/>
        <div class='row'>
          <table class="responsive-table centered highlight">
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
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  )}
}

export default Fetch;
