import React from 'react'

export default function Shirt(props) {
  return (
    <div>
      <h4 className="shirt">{props.attributes[props.index]}</h4>
    </div>
  )
}
