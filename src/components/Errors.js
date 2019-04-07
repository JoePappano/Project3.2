import React, { Component } from 'react'

export class Errors extends Component {
  render() {
    return (
      <div>
            <b> <h1 className="center-align"> 406 Error </h1> </b>
            <p> Please make sure you have: </p>
            <ol> 
                <li> All fields filled out. </li>
                <li> Password fields match. </li>
                <li> Password is 6 or more letters long. </li>
            </ol>
      </div>
    )
  }
}

export default Errors
