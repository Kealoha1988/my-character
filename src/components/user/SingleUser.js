import React from 'react'
import SingleCharacter from '../SingleCharacter'


export default function SingleUser(props) {

  const characters = () => props.characters.map( (char, i) => <SingleCharacter id={i} name={char.name } hairIndex={char.hairIndex} eyesIndex={char.eyesIndex} mouthIndex={char.mouthIndex} shirtIndex={char.shritIndex} pantsIndex={char.pantsIndex} shoesIndex={char.shoesIndex} /> )

  return (
    <div>
      <h3>{props.name}</h3>
     
    {characters()}
    </div>
  )
}
