// make an arry of diff pants that are chosen from the dropdown in the nav.
// when the user clicks on it i will render on the character
// for now trying to make it user with words that render in app.  
// later convert to images or svgs
import React from 'react'

export default function Pants(props) {

  const pants = ["pants1", "pants2", "pants3", "pants4", "pants5"]

  return (
    <div>
      <h4 className="pants">{pants[props.index]}</h4>
    </div>
  )
}

