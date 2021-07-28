import React from 'react'

export default function MessageTemplate(props) {
  return (
    <div>
      <div className="singleUser-container">
      <h3 className="selectorText">Creator: {props.currentUser} says: there will be messages here</h3>
      </div>
    </div>
  )
}
