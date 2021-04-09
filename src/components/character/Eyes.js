// make an arry of diff eyes that are chosen from the dropdown in the nav.
// when the user clicks on it i will render on the character
// for now trying to make it user with words that render in app.  
// later convert to images or svgs

import React from 'react'
import eyes1 from "./gifs/eyes1.gif";
import eyes2 from "./gifs/eyes2.gif";


class  Eyes extends React.Component {
eyes = [eyes1, eyes2, eyes1, eyes1, eyes1]


  render(){
  return (
    <div>
      <h4 className="eyes"><img src={this.eyes[this.props.index]}/></h4>
    </div>
  )
}
} 

export default Eyes
