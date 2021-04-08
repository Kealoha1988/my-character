// make an arry of diff hairstyles that are chosen from the dropdown in the nav.
// when the user clicks on it i will render on the character
// for now trying to make it user with words that render in app.  
// later convert to images or svgsre 

import React from 'react'

export default function Hair(props) {
  return (
    <div>
      <h4 className="hair">{props.attributes[props.index]}</h4>
    </div>
  )
}
