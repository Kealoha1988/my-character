import React from 'react'
import CharacterCreator from './components/CharacterCreator'
import NameForm from './components/user/NameForm'

export default function Home() {
  return (
    <div>
      <center>
     
      <NameForm />
      </center>
      <CharacterCreator />
    </div>
  )
}
