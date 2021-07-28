import React from 'react'
import MessageBox from './MessageBox'


export default function Messages(props) {




  return (
    <div>
      <center>
      <h4 className="selectorText" id="h4">messages</h4>
      <div className="singleUser-container">
      <h3 className="selectorText">Creator: {props.currentUser} says: there will be messages here</h3>
      </div>
      <br/>
      <MessageBox/>
      </center>
    </div>
  )
}
