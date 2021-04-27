import React from 'react'
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import AllCharacters from "./components/AllCharacters";
import UserCharacters from "./components/user/UserCharacters";
import Oops from "./Oops";
import Nav from './Nav'
import { generatePath } from "react-router";





class App extends React.Component {



cool = {
  id: 2
}


  render(){
  return (
    <div className="App">
     
      <Router>

        <Nav cool={this.cool.id}/>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/characters" component={AllCharacters} />
          <Route exact path={generatePath("/user/:id/characters", {
            id: this.cool.id,
          })} 
          render={(props) =>(<UserCharacters cool={this.cool.id} />)}
           />

          <Route component={Oops} />
        </Switch>

      </Router>
    </div>
  );
}
}

export default App;
