import CharacterCreator from './components/CharacterCreator'
import NameForm from './components/user/NameForm'



function App() {

  

  return (
    <div className="App">
      <center>
    <h1>Hello and welcome to my character!</h1>
    <NameForm />
 
      </center>
    <CharacterCreator />
    </div>
  );
}

export default App;
