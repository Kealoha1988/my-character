// make an arry of diff body "male" "female" that are chosen from the dropdown in the nav.
// when the user clicks on it i will render on the character
// for now trying to make it user with words that render in app.  
// later convert to images or svgs
import Eyes from './Eyes'
import Hair from './Hair'
import Mouth from './Mouth'
import Shirt from './Shirt'
import Pants from './Pants'
import Shoes from './Shoes'
import React from 'react'

export default function Body(props) {
  return (
         <div className="characterBody">
        <Hair attributes={props.attributes.hair} index={props.attributes.hairIndex}/>
        <Eyes  attributes={props.attributes.eyes} index={props.attributes.eyesIndex}/>
        <Mouth attributes={props.attributes.mouth} index={props.attributes.mouthIndex}/>
        <Shirt  attributes={props.attributes.shirt} index={props.attributes.shirtIndex}/>
        <Pants attributes={props.attributes.pants} index={props.attributes.pantsIndex}/>
        <Shoes attributes={props.attributes.shoes} index={props.attributes.shoesIndex}/>
        </div>
  )
}
