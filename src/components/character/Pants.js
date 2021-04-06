// make an arry of diff pants that are chosen from the dropdown in the nav.
// when the user clicks on it i will render on the character
// for now trying to make it user with words that render in app.  
// later convert to images or svgs
import React, { Component } from 'react'

export class Pants extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       type: "",
       color: ""
    }
  }
  
  render() {
    return (
      <div className="pants">
        <h4>PANTS</h4>
      </div>
    )
  }
}

export default Pants
