import React from 'react'

export default function MessageTemplate(props) {
  return (
    <div>
      <div className="singleUser-container">
      <h3 className="selectorText" style={{color: "pink"}}>{props.creator} says: {props.content}</h3>
      </div>
    </div>
  )
}
