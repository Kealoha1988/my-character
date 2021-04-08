// make an arry of diff eyes that are chosen from the dropdown in the nav.
// when the user clicks on it i will render on the character
// for now trying to make it user with words that render in app.  
// later convert to images or svgs

import React from 'react'

export default function Eyes(props) {
  return (
    <div>
      <h4 className="eyes">{props.attributes[props.index]}</h4>
    </div>
  )
}
