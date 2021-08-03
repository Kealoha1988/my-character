import React from 'react'

export default function MessageTemplate(props) {


  return (
    <div>
      <div className="singleUser-container">
      <h3 className="selectorText" style={{color: "aquamarine"}}>{props.creator} <small style={{color: "beige"}}>says:</small> {props.content}</h3>
      </div>
    </div>
  )
}
