
import React from 'react'
import pants1 from "./gifs/pants1.gif";
import pants2 from "./gifs/pants2.gif"
import pants3 from "./gifs/pants3.gif";
import pants4 from "./gifs/pants4.gif";
import pants5 from "./gifs/pants5.gif";

export default function Pants(props) {

  const pants = [pants1, pants2, pants3, pants4, pants5]

  return (
    <div className="pants">
     <img src={pants[props.index]}/>
    </div>
  )
}

