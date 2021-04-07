import React from 'react'

export default function Shirt(props) {
  return (
    <div>
      <h4 className="shirt">{props.attributes[0]}</h4>
    </div>
  )
}
