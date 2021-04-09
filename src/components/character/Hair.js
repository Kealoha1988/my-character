// make an arry of diff hairstyles that are chosen from the dropdown in the nav.
// when the user clicks on it i will render on the character
// for now trying to make it user with words that render in app.  
// later convert to images or svgsre 

import React from 'react'
import hair1 from "./gifs/hair1.gif";

export default function Hair(props) {

const hair = [hair1, hair1, hair1, hair1, hair1]

  return (
    <div>
      <h4 className="hair"><img src={hair[props.index]}/></h4>
    </div>
  )
}
