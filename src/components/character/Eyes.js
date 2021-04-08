// make an arry of diff eyes that are chosen from the dropdown in the nav.
// when the user clicks on it i will render on the character
// for now trying to make it user with words that render in app.  
// later convert to images or svgs

import React from 'react'

export default function Eyes(props) {

    const eyes = ["cool eyes", "sexy eyes", "sleepy eyes", "cute eyes", "angry eyes"]

  return (
    <div>
      <h4 className="eyes">{eyes[props.index]}</h4>
    </div>
  )
}
