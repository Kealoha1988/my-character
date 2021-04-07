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
        <Hair attributes={props.attributes.hair}/>
        <Eyes  attributes={props.attributes.eyes}/>
        <Mouth attributes={props.attributes.mouth}/>
        <Shirt  attributes={props.attributes.shirt}/>
        <Pants attributes={props.attributes.pants}/>
        <Shoes attributes={props.attributes.shoes}/>
        </div>
  )
}
