import React, {useState} from 'react'
import SingleCharacter from '../SingleCharacter'



export default function SingleUser(props) {

  const [hide, showCharacters] = useState(true)
  const [text, setText] = useState("see characters")
 



  const handleClick = (e) => {
    e.preventDefault()
    showCharacters(!hide)
    if (e.target.value === "see characters"){setText(() => "hide characters")}
    else if (e.target.value === "hide characters"){setText(() => "see characters")}
  }



  const characters = () => props.characters.map( char => <SingleCharacter key={char.id} id={char.id} name={char.name } userId={props.userId} hairIndex={char.hairIndex} eyesIndex={char.eyesIndex} mouthIndex={char.mouthIndex} shirtIndex={char.shirtIndex} pantsIndex={char.pantsIndex} shoesIndex={char.shoesIndex} skinTone={char.skinTone} likes={char.likes}/> )



  return (
    <div>
      <div className="singleUser-container">
      <h3 className="selectorText">Creator: {props.name} <input type="submit" id="thing" className="userDiv" onClick={handleClick} value={props.buttonFn ? text : "your characters"} ></input></h3>
      </div>
      
  
      {props.buttonFn ? (hide === true ? "" : characters()) : characters()}
     
    </div>
  )
}
