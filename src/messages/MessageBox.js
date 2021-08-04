import React, {useState} from 'react'
// import {useDispatch} from 'react-redux'

export default function MessageBox(props) {


const [text, setText] = useState("")

// const dispatch = useDispatch()

const handleChange = (e) => setText(e.target.value)


const setMessage = (text) => {
  const strongParams = {
    message: {
      content: text,
      user_id: props.userId
    }
  }
  fetch("http://localhost:3001/messages", {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(strongParams),
    method: "POST"
  })
  .then(resp => resp.json())
  .then(data => console.log(data))
}




  return (
    <div>
      <h3 style={{color: 'pink'}}>{text}</h3>
        <input type="text" value={text} onChange={handleChange}></input>
        <button className="button" onClick={() => setMessage(text)}>send message</button>
    </div>
  )
}

