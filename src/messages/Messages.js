import React from 'react'


export default function Messages(props) {
  return (
    <div>
      <center>
      <h4 className="selectorText" id="h4">messages</h4>
      <h3>{props.currentUser}</h3>
      </center>
    </div>
  )
}
