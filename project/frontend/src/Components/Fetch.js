import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

class Fetch extends React.Component {
  constructor(){
    super()
    this.state = {
      x : []
    }
  }


  fetch = event => {
    axios
       .get(`/employee/`)
       .then(response =>{
           this.setState({
             x : response.data
           })
         })
       .catch(error => {
           alert('Error in fetching data')
         })
  }

  render () {
    const {x} = this.state
    return(
     <div class='container'><br/><br/>
        <div class='row'>
          <table class="responsive-table centered highlight">
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
              </tr>
            </thead>
            <tbody>
                  {x.map((name,i)=><tr key={i}>
                  <td>{name.firstname}</td>
                  <td>{name.lastname}</td>
                  </tr>)}
            </tbody>
          </table>
        </div><br/><br/>
        <div class='row'>
          <a class="waves-effect waves-light btn-small" onClick={this.fetch}>Fetch</a>
        </div>
      </div>
  )}
}

export default Fetch;
