 import React, {useState} from 'react'
 import Body from "./character/Body";
 import { Redirect } from 'react-router';

 
 export default function SingleCharacter(props) {

  const [redirect, makeRedirect] = useState(false)
  const [number, setNumber] = useState(props.likes)
  const [liked, setLiked] = useState(false)


  const   attributes = {
    hairIndex: props.hairIndex,
    eyesIndex: props.eyesIndex,
    mouthIndex: props.mouthIndex,
    shirtIndex: props.shirtIndex,
    pantsIndex: props.pantsIndex,
    shoesIndex: props.shoesIndex,
    skinTone: props.skinTone
  }

  const eyes = ["cute eyes", "evil eyes", "shifty eyes", "dreamy eyes", "winky eyes"]
  const hair = ["dapper hair", "flat hair", "blonde hair", "purple hair", "bald head"]
  const mouth = ["vampire teeth", "sultry lips", "smiley mouth", "happy mouth", "blue steel"]
  const shirt = ["white hoodie", "grey hoodie","white turtleneck", "black turtleneck", "blue turtleneck"]
  const pants = ["black jeans", "grey jeans", "white jeans", "blue jeans", "ox blood jeans"]
  const shoes = ["white shoes", "black shoes", "red shoes", "neon shoes", "purple shoes"]


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


  const sendLikes = () => {
    let strongParams = {
        character: {
            likes: number + 1, 
        }
    }
    fetch(`http://localhost:3001/characters/${props.id}`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(strongParams),
        method: "PATCH"
    })
    .then(response => response.json())
    .then(data => data)
  }

  const likeButton = () => {
    if (liked == false){
      return <button className="button" style={{backgroundColor: "white", color: "purple"}}onClick={handleLikes} >likes {number} </button>
    }else{
      return <button className="button" style={{backgroundColor: "white", color: "purple"}}>liked {number} </button>
    }
  }

  const handleLikes = () => {
    setNumber(number + 1)
    setLiked(true)
    sendLikes()
  }





   return (


     <div className="characterCreator">

    <center>
    <div className="attributeSelector">

      <h4 className="selectorText">{props.name}</h4>


    <div  className="button"><small>{hair[attributes.hairIndex]}</small></div>
    <br/><br/>
  <div className="button"><small>{eyes[attributes.eyesIndex]}</small></div>
    <br/><br/>
    <div className="button"><small>{mouth[attributes.mouthIndex]}</small></div>
    <br/><br/>
   <div className="button"><small>{shirt[attributes.shirtIndex]}</small></div>
   <br/><br/>
    <div className="button"><small>{pants[attributes.pantsIndex]}</small></div>
    <br/><br/>
    <div className="button"><small>{shoes[attributes.shoesIndex]}</small></div>
    <br/><br/>
    
     {likeButton()}

    {canDelete()}
    <br></br><br></br>
    </div>
    </center>

    {ifRedirect()}

    <center>
    <Body attributes={props} />
    </center>

 
  </div>
     
   )
 }
 