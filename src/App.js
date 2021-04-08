import CharacterCreator from './components/CharacterCreator'
import NameForm from './components/user/NameForm'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



function App() {

  

  return (
    <div className="App">
      <Router>
      <center>
    <h1>Hello and welcome to my character!</h1>
    <NameForm />
 
      </center>
    <CharacterCreator />
    </Router>
    </div>
  );
}

export default App;
