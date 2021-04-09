import React, { Component } from 'react';
import Body from './character/Body'
import CharacterName from './character/CharacterName'

class CharacterCreator extends Component {

  state = {
    hairIndex: 0,
    eyesIndex: 0,
    mouthIndex: 0,
    shirtIndex: 0,
    pantsIndex: 0,
    shoesIndex: 0
  }




handleClickUp = (e) => {
  e.preventDefault()

  if (this.state.hairIndex === 4){this.setState({ hairIndex: this.state.hairIndex - 4})}
  else if (this.state.eyesIndex === 4){this.setState({ eyesIndex: this.state.eyesIndex - 4})}
  else if (this.state.mouthIndex === 5){this.setState({ mouthIndex: this.state.mouthIndex - 4})}
  else if (this.state.shirtIndex === 4){this.setState({ shirtIndex: this.state.shirtIndex - 4})}
  else if (this.state.pantsIndex === 4){this.setState({ pantsIndex: this.state.pantsIndex - 4})}
  else if (this.state.shoesIndex === 4){this.setState({ shoesIndex: this.state.shoesIndex - 4})}
 
  
  else if (e.target.name === "hair"){this.setState({hairIndex: this.state.hairIndex + 1})}
  else if (e.target.name === "eyes"){this.setState({eyesIndex: this.state.eyesIndex + 1})}
  else if (e.target.name === "mouth"){this.setState({mouthIndex: this.state.mouthIndex + 1})}
  else if (e.target.name === "shirt"){this.setState({shirtIndex: this.state.shirtIndex + 1})}
  else if (e.target.name === "pants"){this.setState({pantsIndex: this.state.pantsIndex + 1})}
  else if (e.target.name === "shoes"){this.setState({shoesIndex: this.state.shoesIndex + 1})}
  console.log(this.state)
}


render() {
    console.log(this.state)
    return (
      <div className="characterCreator">

        <center>
        <div className="attributeSelector">
          <CharacterName />

       <br/><br/>
        <button name="hair" onClick={this.handleClickUp} className="button">choose<br/>hair</button>
        <br/><br/>
        <button name="eyes" onClick={this.handleClickUp} className="button">choose<br/>eyes</button>
        <br/><br/>
        <button name="mouth" onClick={this.handleClickUp} className="button">choose<br/>mouth</button>
        <br/><br/>
       <button name="shirt" onClick={this.handleClickUp} className="button">choose<br/>shirt</button>
       <br/><br/>
        <button name="pants" onClick={this.handleClickUp} className="button">choose<br/>pants</button>
        <br/><br/>
        <button name="shoes" onClick={this.handleClickUp} className="button">select<br/>shoes</button>
        <br></br><br></br>
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