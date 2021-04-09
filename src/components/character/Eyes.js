// make an arry of diff eyes that are chosen from the dropdown in the nav.
// when the user clicks on it i will render on the character
// for now trying to make it user with words that render in app.  
// later convert to images or svgs

import React from 'react'
import eyes1 from "./gifs/eyes1.gif";
import eyes2 from "./gifs/eyes2.gif";
import eyes3 from "./gifs/eyes3.gif";
import eyes4 from "./gifs/eyes4.gif";
import eyes5 from "./gifs/eyes5.gif";


export default function Eyes(props) {

    const eyes = [eyes1, eyes2, eyes3, eyes5, eyes4]

  return (
    <div>
      <h4 className="eyes"><img src={eyes[props.index]} /></h4>
    </div>
  )
}
