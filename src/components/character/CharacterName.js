import React, { Component } from 'react'

class CharacterName extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       characterName: "my character"
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
    document.getElementById('h4').innerText = this.state.characterName
    this.setState({characterName: this.state.characterName})
    console.log(this.state)
  }




  render() {
    return (
      <div>
        <h4 className="selectorText" id="h4">my character</h4>
        <form >
          <input type="text" className="textBoxes" name="characterName" value={this.state.name} onChange={this.handleChange} placeholder=""></input>
          <br/>
          <input type="submit"  className="button" onClick={this.handleSubmit} value="name me"></input>
        </form>
      </div>
    )
  }
}
export default CharacterName
