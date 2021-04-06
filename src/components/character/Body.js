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



import React, { Component } from 'react'

export class Body extends Component {
  render() {
    return (
      <div className="characterBody">
        <Hair />
        <Eyes />
        <Mouth />
        <Shirt />
        <Pants />
        <Shoes />
      </div>
    )
  }
}

export default Body
