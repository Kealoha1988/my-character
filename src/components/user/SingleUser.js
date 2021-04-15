import React, {useState} from 'react'
import SingleCharacter from '../SingleCharacter'



export default function SingleUser(props) {

  const [hide, showCharacters] = useState(true)
  


  const handleClick = (e) => {
    e.preventDefault()
    showCharacters(!hide)
    if (hide){e.target.value = "see characters"}
    else if (!hide){e.target.value = "hide character"} 
  }



  const characters = () => props.characters.map( char => <SingleCharacter key={char.id} id={char.id} name={char.name } hairIndex={char.hairIndex} eyesIndex={char.eyesIndex} mouthIndex={char.mouthIndex} shirtIndex={char.shritIndex} pantsIndex={char.pantsIndex} shoesIndex={char.shoesIndex} skinTone={char.skinTone} /> )



  return (
    <div>
      <div className="singleUser-container">
      <h3 className="selectorText" >Creator: {props.name}   <input type="submit" id="thing" className="userDiv" onClick={handleClick} value="see characters" ></input></h3>
      </div>
      
  
      {hide === true ? "" : characters()}
     
    </div>
  )
}
