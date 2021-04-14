 import React from 'react'
 import Body from "./character/Body";
 
 export default function SingleCharacter(props) {

  const   cool = {
    hairIndex: props.hairIndex,
    eyesIndex: props.eyesIndex,
    mouthIndex: props.mouthIndex,
    shirtIndex: props.shirtIndex,
    pantsIndex: props.pantsIndex,
    shoesIndex: props.shoesIndex 
  }



   return (

     <div className="characterCreator">

    <center>
    <div className="attributeSelector">

      <h4>{props.name}</h4>
      {/* <h4>creator: {props.characters.forEach(element => {element.name})}</h4> */}


    <button  className="button">hair {cool.hairIndex}</button>
    <br/><br/>
    <button className="button">eyes {cool.eyesIndex}</button>
    <br/><br/>
    <button className="button">mouth {cool.mouthIndex}</button>
    <br/><br/>
   <button className="button">shirt {cool.shirtIndex}</button>
   <br/><br/>
    <button className="button">pants {cool.pantsIndex}</button>
    <br/><br/>
    <button className="button">shoes {cool.shoesIndex}</button>
    <br></br><br></br>
    </div>
    </center>

    <center>
    <Body attributes={cool} />
    </center>
 
  </div>
     
   )
 }
 