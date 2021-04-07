import React, { Component } from 'react';

class Nav extends Component {
 
  state = {
    hair: ["hair1", "hair2", "hair3", "hair4", "hair5"],
    eyes: ["eyes1", "eyes2", "eyes3", "eyes4", "eyes5"],
    mouth: ["mouth1", "mouth2", "mouth3", "mouth4", "mouth5"],
    shirt: ["shirt1", "shirt2", "shirt3", "shirt4", "shirt5"],
    pants: ["pants1", "pants2", "pants3", "pants4", "pants5" ],
    shoes: ["shoes1", "shoes2", "shoes3", "shoes4", "shoes5"]
  }


  setHairAtts(category){
    this.setState()
  }




  render() {
    return (
      <div>
        <h4>colors</h4>
        <button name="color" value="green">green</button>
        <button name="color" value="brown">brown</button>
        <button name="color" value="yellow">yellow</button>
        <button name="color" value="blue">blue</button>
        <button name="color" value="purple">purple</button>
        <h4>kinds</h4>
        <button name="kind" value="cool">cool</button>
        <button name="kind" value="sleepy">sleepy</button>
      </div>
    );
  }
}

export default Nav