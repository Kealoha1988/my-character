import React, { Component, createContext } from 'react';
import { Redirect } from 'react-router';
import Body from './character/Body'


class CharacterCreator extends Component {

  state = {
    characterName: "my character",
    hairIndex: 0,
    eyesIndex: 0,
    mouthIndex: 0,
    shirtIndex: 0,
    pantsIndex: 0,
    shoesIndex: 0,
    skinTone: "",
    redirect: false
  }



  
  handleClickUp = (e) => {
    e.preventDefault()
    if (e.target.name === "hair"){this.setState({hairIndex: this.state.hairIndex + 1})}
    else if (e.target.name === "eyes"){this.setState({eyesIndex: this.state.eyesIndex + 1})}
    else if (e.target.name === "mouth"){this.setState({mouthIndex: this.state.mouthIndex + 1})}
    else if (e.target.name === "shirt"){this.setState({shirtIndex: this.state.shirtIndex + 1})}
    else if (e.target.name === "pants"){this.setState({pantsIndex: this.state.pantsIndex + 1})}
    else if (e.target.name === "shoes"){this.setState({shoesIndex: this.state.shoesIndex + 1})}
  }
  
  handleClickReset = (e) => {
  if (e.target.name === "hair"){this.setState({hairIndex: this.state.hairIndex - 4})}
  else if (e.target.name === "eyes"){this.setState({eyesIndex: this.state.eyesIndex - 4})}
  else if (e.target.name === "mouth"){this.setState({mouthIndex: this.state.mouthIndex - 4})}
  else if (e.target.name === "shirt"){this.setState({shirtIndex: this.state.shirtIndex - 4})}
  else if (e.target.name === "pants"){this.setState({pantsIndex: this.state.pantsIndex - 4})}
  else if (e.target.name === "shoes"){this.setState({shoesIndex: this.state.shoesIndex - 4})}
  }



handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}



handleName = (e) => {
  e.preventDefault()
  document.getElementById('h4').innerText = this.state.characterName
  this.setState({characterName: this.state.characterName})
  console.log(this.state)
}


  handleSubmit = (e) => {
    e.preventDefault()
    let strongParams = {
      character: {
          name: this.state.characterName,
          hairIndex: this.state.hairIndex,
          eyesIndex: this.state.eyesIndex,
          mouthIndex: this.state.mouthIndex,
          shirtIndex: this.state.shirtIndex,
          pantsIndex: this.state.pantsIndex,
          shoesIndex: this.state.shoesIndex,
          skinTone: this.state.skinTone 
      }
  }
  fetch("http://localhost:3001/characters", {
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
      },
      body: JSON.stringify(strongParams),
      method: "POST"
  })
  .then(response => response.json())
  .then(character => this.setState({
    characterName: character.name,
    hairIndex: character.hairIndex,
    eyesIndex: character.eyesIndex,
    mouthIndex: character.mouthIndex,
    shirtIndex: character.shirtIndex,
    pantsIndex: character.pantsIndex,
    shoesIndex: character.shoesIndex,
    skinTone: character.skinTone,
    redirect: true
  }))
  }

  changeColor = (e) => {
    e.preventDefault()
    this.setState({skinTone: e.target.value})
  
  
  }

  makeRedirect = () => {
    if (this.state.redirect){
      return <Redirect to="/characters" />
    }
  }



render() {

  console.log(this.state)

    return (

      <div className="characterCreator">

        {this.makeRedirect()}
       
        <center>
        <div className="attributeSelector">
         
        <h5 className="selectorText" id="h4">my character</h5>
        <form >
          <input type="text" className="textBoxes" name="characterName" value={this.state.name} onChange={this.handleChange} placeholder=""></input>
         
          <input type="submit"  className="button" onClick={this.handleName} value="name me"></input>
        </form>

       <p style={{color: "white", fontFamily: 'Permanent Marker'}}><small>choose skin tone</small></p>
       <input type="color" onChange={this.changeColor} className="chooseColor" ></input>
       <br />


       
        <button name="hair" onClick={this.state.hairIndex < 4 ? this.handleClickUp : this.handleClickReset} className="button">choose<br/>hair</button>
        
        <button name="eyes" onClick={this.state.eyesIndex < 4 ? this.handleClickUp : this.handleClickReset} className="button">choose<br/>eyes</button>
        
        <button name="mouth" onClick={this.state.mouthIndex < 4 ? this.handleClickUp : this.handleClickReset} className="button">choose<br/>mouth</button>
        
        <button name="shirt" onClick={this.state.shirtIndex < 4 ? this.handleClickUp : this.handleClickReset} className="button">choose<br/>shirt</button>
       
        <button name="pants" onClick={this.state.pantsIndex < 4 ? this.handleClickUp : this.handleClickReset} className="button">choose<br/>pants</button>
        
        <button name="shoes" onClick={this.state.shoesIndex < 4 ? this.handleClickUp : this.handleClickReset} className="button">select<br/>shoes</button>
        
        <input type="submit" className="button" onClick={this.handleSubmit} style={{backgroundColor: "green"}}value="save me!"></input>
    
        </div>
        </center>


        <center>
        <Body attributes={this.state} />
        </center>

      </div>
    );
  }
}

export default CharacterCreator