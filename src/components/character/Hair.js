// make an arry of diff hairstyles that are chosen from the dropdown in the nav.
// when the user clicks on it i will render on the character
// for now trying to make it user with words that render in app.  
// later convert to images or svgsre 

import React, { Component } from 'react'

export class Hair extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       type: "",
       color: ""
    }
  }
  render() {
    return (
      <div className="hair">
      <h4>hair {this.props.state}</h4>
      </div>
    )
  }
}

export default Hair