import React from 'react'
import hair1 from "./gifs/hair1.gif";
import hair2 from "./gifs/hair2.gif";
import hair3 from "./gifs/hair3.gif";
import hair4 from "./gifs/hair4.gif";
import hair5 from "./gifs/hair5.gif";


export default function Hair(props) {

const hair = [hair4, hair1, hair2, hair5, hair3]

  return (
    <div className="hair">
    <img src={hair[props.index]}/>
    </div>
  )
}
