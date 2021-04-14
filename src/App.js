import React from 'react'
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import AllCharacters from "./components/AllCharacters";
import SingleCharacter from "./components/SingleCharacter";
import Oops from "./Oops";
import Nav from './Nav'
import { mockComponent } from "react-dom/test-utils";




class App extends React.Component {

currentUser = []


  render(){
  
  return (
    <div className="App">
     
      <Router>

        <Nav />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/characters" component={AllCharacters} />
          <Route exact path="/character" component={SingleCharacter} />
          <Route component={Oops} />
        </Switch>

      </Router>
    </div>
  );
}
}

export default App;
