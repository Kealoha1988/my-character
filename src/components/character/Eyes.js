// make an arry of diff eyes that are chosen from the dropdown in the nav.
// when the user clicks on it i will render on the character
// for now trying to make it user with words that render in app.  
// later convert to images or svgs

import React from 'react'
import cuteEyes from "./gifs/cuteEyes.gif";
import evilEyes from "./gifs/evilEyes.gif";
import shiftyEyes from "./gifs/shiftyEyes.gif";
import dreamyEyes from "./gifs/dreamyEyes.gif";
import winkyEyes from "./gifs/winkyEyes.gif";


export default function Eyes(props) {

    const eyes = [cuteEyes, evilEyes, shiftyEyes, dreamyEyes, winkyEyes]

  return (
    <div className="eyes">
    <img src={eyes[props.index]} />
    </div>
  )
}
