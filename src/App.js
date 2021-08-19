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
import Messages from './messages/Messages'



class App extends React.Component {


componentDidMount(){
  this.props.getUserState()
}


  render(){

    const currentUserId = this.props.currentUser.id
    // console.log(this.props.user.id)
  return (
    <div className="App">
     
      <Router>

        <Nav cool={currentUserId}/>

        <Switch>
          <Route exact path={generatePath("/")}
            render={() => (<Home userId={currentUserId}/>)}/> 
          <Route exact path="/characters" component={AllCharacters} />
          <Route exact path={generatePath("/messages")}
            render={() =>(<Messages userId={currentUserId}/>)}/>
          <Route exact path={generatePath("/user/:id/characters", {
            id: this.props.currentUser.id,
          })} 
          render={() =>(<UserCharacters cool={currentUserId} />)}
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
