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
     <div>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
     <Body attributes={cool} />
     </div>
   )
 }
 