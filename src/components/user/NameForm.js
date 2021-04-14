import React, { Component } from 'react'

class NameForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userName: "",
       id: ""
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
      [e.target.name]: e.target.value 
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    // console.log(this.state.userName)
    let strongParams = {
      user: {
          name: this.state.userName, 
      }
  }
  fetch("http://localhost:3001/users", {
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
      },
      body: JSON.stringify(strongParams),
      method: "POST"
  })
  .then(response => response.json())
  .then(user => this.setState({
    userName: user.name,
    id: user.id
  }))

}


  render() {

    return (
      <div>
        <h4 className="selectorText">what is your name?</h4>
        <form onClick={this.handleSubmit}>
          <input type="text" className="textBoxes" name="userName" value={this.state.name} onChange={this.handleChange}></input>
          <input type="submit"  className="button" onClick={this.handleSubmit} ></input>
        </form>
      </div>
    )
  }
}

export default NameForm
