import React from 'react'
import Home from "./Home"
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import AllCharacters from "./components/AllCharacters"
import UserCharacters from "./components/user/UserCharacters"
import Oops from "./Oops"
import Nav from './Nav'
import { generatePath } from "react-router"
import { connect } from 'react-redux'
import{ getUserState } from './actions'



class App extends React.Component {


componentDidMount(){
  this.props.getUserState()
}


  render(){
    // console.log(this.props.user.id)
  return (
    <div className="App">
     
      <Router>

        <Nav cool={this.props.currentUser.id}/>

        <Switch>
          <Route exact path="/" component={Home} /> 
          <Route exact path="/characters" component={AllCharacters} />
          <Route exact path={generatePath("/user/:id/characters", {
            id: this.props.currentUser.id,
          })} 
          render={(props) =>(<UserCharacters cool={this.props.currentUser.id} />)}
           />

          <Route component={Oops} />
        </Switch>

      </Router>
    </div>
  );
}
}


const mapStateToProps = state => {
  return {
    currentUser: state.user
  }
}

export default connect(mapStateToProps, { getUserState })(App)
// export default App;
