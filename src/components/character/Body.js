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
           <div className="face">
        <Mouth index={props.attributes.mouthIndex}/>
        <Eyes  index={props.attributes.eyesIndex}/>
        <Hair index={props.attributes.hairIndex} />
          </div>
          <div className="torso">
        <Shirt  index={props.attributes.shirtIndex}/>
          </div>
          <div className="lowerHalf">
        <Pants index={props.attributes.pantsIndex}/>
        <Shoes index={props.attributes.shoesIndex}/>
          </div>
        </div>
  )
}
