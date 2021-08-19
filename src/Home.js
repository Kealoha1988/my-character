import React from 'react'
import CharacterCreator from './components/CharacterCreator'
import NameForm from './components/user/NameForm'

export default function Home(props) {

  return (
    <div>
      <center>
      <NameForm />
      </center>
      <CharacterCreator userId={props.userId}/>
    </div>
  )
}
