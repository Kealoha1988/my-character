import React from 'react'
import mouth1 from "./gifs/mouth1.gif";
import mouth2 from "./gifs/mouth2.gif";
import mouth3 from "./gifs/mouth3.gif";
import mouth4 from "./gifs/mouth4.gif";
import mouth5 from "./gifs/mouth5.gif";

export default function Mouth(props) {

  const mouth = [mouth2, mouth4, mouth1, mouth3, mouth5] 
  
  return (
    <div>
      <h4 className="mouth"><img src={mouth[props.index]}/></h4>
    </div>
  )
}



