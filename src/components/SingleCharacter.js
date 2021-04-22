 import React from 'react'
 import Body from "./character/Body";
 import { Redirect } from 'react-router-dom'

 
 export default function SingleCharacter(props) {

  const   cool = {
    hairIndex: props.hairIndex,
    eyesIndex: props.eyesIndex,
    mouthIndex: props.mouthIndex,
    shirtIndex: props.shirtIndex,
    pantsIndex: props.pantsIndex,
    shoesIndex: props.shoesIndex,
    skinTone: props.skinTone
  }

  const eyes = ["cute eyes", "evil eyes", "shifty eyes", "dreamy eyes", "winky eyes"]

  const handleDelete = e => {
    e.preventDefault()
    fetch("http://localhost:3001/characters/" + `${props.id.toString()}`, {
      method: "DELETE"
      })
      window.location.reload()
  }





   return (

     <div className="characterCreator">

    <center>
    <div className="attributeSelector">

      <h4 className="selectorText">{props.name}</h4>
      {/* <h4>creator: {props.characters.forEach(element => {element.name})}</h4> */}


    <div  className="button">hair {cool.hairIndex}</div>
    <br/><br/>
  <div className="button"><small>{eyes[cool.eyesIndex]}</small></div>
    <br/><br/>
    <div className="button">mouth {cool.mouthIndex}</div>
    <br/><br/>
   <div className="button">shirt {cool.shirtIndex}</div>
   <br/><br/>
    <div className="button">pants {cool.pantsIndex}</div>
    <br/><br/>
    <div className="button">shoes {cool.shoesIndex}</div>
    <br/><br/>
    <input type="submit" className="button" style={{backgroundColor: "red"}}value="delete me" onClick={handleDelete}></input>
    <br></br><br></br>
    </div>
    </center>

    <center>
    <Body attributes={cool} />
    </center>

 
  </div>
     
   )
 }
 