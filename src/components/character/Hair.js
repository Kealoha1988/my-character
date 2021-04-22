// make an arry of diff hairstyles that are chosen from the dropdown in the nav.
// when the user clicks on it i will render on the character
// for now trying to make it user with words that render in app.  
// later convert to images or svgsre 

import React from 'react'
import hair1 from "./gifs/hair1.gif";
import hair2 from "./gifs/hair2.gif";
import hair3 from "./gifs/hair3.gif";
import hair4 from "./gifs/hair4.gif";
import hair5 from "./gifs/hair5.gif";


export default function Hair(props) {

const hair = [hair4, hair1, hair2, hair5, hair3]

  return (
    <div>
      <h4 className="hair"><img src={hair[props.index]}/></h4>
    </div>
  )
}
