import React, { Component } from 'react'

export class Mouth extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       type: "",
       color: ""
    }
  }
  
  render() {
    return (
      <div className="mouth">
        <h4>MOUTH</h4>
      </div>
    )
  }
}

export default Mouth
