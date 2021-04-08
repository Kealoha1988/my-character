import React, { Component } from 'react'

class CharacterName extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       characterName: ""
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
      [e.target.characterName]: e.target.value 
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }


  render() {
    return (
      <div>
        <h4>name your character!!?</h4>
        <form onClick={this.handleSubmit}>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange}></input>
          <input type="submit"  className="button" ></input>
        </form>
      </div>
    )
  }
}
export default CharacterName
