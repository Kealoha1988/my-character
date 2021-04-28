 import React, {useState} from 'react'
 import Body from "./character/Body";
 import { Redirect } from 'react-router';

 
 export default function SingleCharacter(props) {

  const [redirect, makeRedirect] = useState(false)


  const   cool = {
    hairIndex: props.hairIndex,
    eyesIndex: props.eyesIndex,
    mouthIndex: props.mouthIndex,
    shirtIndex: props.shirtIndex,
    pantsIndex: props.pantsIndex,
    shoesIndex: props.shoesIndex,
    skinTone: props.skinTone
  }

  const eyes = ["cute eyes", "evil eyes", "shifty eyes", "dreamy eyes", "winky eyes", "none" ]
  const hair = ["dapper hair", "flat hair", "blonde hair", "purple hair", "bald head", "none"]
  const mouth = ["vampire teeth", "sultry lips", "smiley mouth", "happy mouth", "blue steel", "none"]
  const shirt = ["white hoodie", "grey hoodie","white turtleneck", "black turtleneck", "blue turtleneck", "none"]
  const pants = ["black jeans", "grey jeans", "white jeans", "blue jeans", "ox blood jeans"]
  const shoes = ["white shoes", "black shoes", "red shoes", "neon shoes", "purple shoes", "none"]


  const handleDelete = e => {
    e.preventDefault()
    fetch("http://localhost:3001/characters/" + `${props.id.toString()}`, {
      method: "DELETE"
    })
    makeRedirect(() => !redirect)
  }

  const canDelete = () => props.userId ? <input type="submit" className="button" style={{backgroundColor: "red"}}value="delete me" onClick={handleDelete}></input> : ""


  const ifRedirect = () => {
    if (redirect){
      return <Redirect to="/" />
    }
  }
  





   return (


     <div className="characterCreator">

    <center>
    <div className="attributeSelector">

      <h4 className="selectorText">{props.name}</h4>


    <div  className="button"><small>{hair[cool.hairIndex]}</small></div>
    <br/><br/>
  <div className="button"><small>{eyes[cool.eyesIndex]}</small></div>
    <br/><br/>
    <div className="button"><small>{mouth[cool.mouthIndex]}</small></div>
    <br/><br/>
   <div className="button"><small>{shirt[cool.shirtIndex]}</small></div>
   <br/><br/>
    <div className="button"><small>{pants[cool.pantsIndex]}</small></div>
    <br/><br/>
    <div className="button"><small>{shoes[cool.shoesIndex]}</small></div>
    <br/><br/>
    {canDelete()}
    <br></br><br></br>
    </div>
    </center>

    {ifRedirect()}

    <center>
    <Body attributes={cool} />
    </center>

 
  </div>
     
   )
 }
 