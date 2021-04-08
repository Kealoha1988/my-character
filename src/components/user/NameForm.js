import React, { Component } from 'react'

class NameForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userName: ""
    }
  }

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   this.setState({ name: e.target.value})
  //   console.log("name set!")
  //   console.log(e.target.name)
  // }
  
  handleChange = (e) => {
    this.setState({
      [e.target.userName]: e.target.value 
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }


  render() {
    return (
      <div>
        <h4>what is your name?</h4>
        <form onClick={this.handleSubmit}>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange}></input>
          <input type="submit"  className="button" ></input>
        </form>
      </div>
    )
  }
}

export default NameForm
