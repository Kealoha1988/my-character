import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import AllCharacters from "./components/AllCharacters";
import SingleCharacter from "./components/SingleCharacter";
import Oops from "./Oops";
import Nav from './Nav'



function App() {

  // const clickNav = (e) => {
  //   e.preventDefault()
  //   if (e.target.name === "home"){
  //    return <Redirect to={Home} />
  //   }
  //   else if (e.target.name === "all characters"){
  //    return <Redirect to={AllCharacters}/>

  //    console.log(e.target.name)
  //   }
  // }




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

export default App;
