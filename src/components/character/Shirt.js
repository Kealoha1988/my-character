import React from 'react'
import shirt1 from "./gifs/shirt1.gif";
import shirt2 from "./gifs/shirt2.gif";
import shirt3 from "./gifs/shirt3.gif";
import shirt4 from "./gifs/shirt4.gif";
import shirt5 from "./gifs/shirt5.gif";


export default function Shirt(props) {

const shirt = [shirt4, shirt1, shirt2, shirt5, shirt3]

  return (
    <div className="shirt">
    <img src={shirt[props.index]} />
    </div>
  )
}
