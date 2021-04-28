import React from 'react'
import shoes1 from "./gifs/shoes1.gif";
import shoes2 from "./gifs/shoes2.gif"
import shoes3 from "./gifs/shoes3.gif";
import shoes4 from "./gifs/shoes4.gif";
import shoes5 from "./gifs/shoes5.gif";

export default function Shoes(props) {

  const shoes = [shoes1, shoes2, shoes3, shoes4, shoes5]

  return (
    <div className="shoes">
      <img src={shoes[props.index]} />
    </div>
  )
}
