import Nav from './components/Nav'
import Body from './components/character/Body'

function App() {

  const state = {
    hair: ["hair1", "hair2", "hair3", "hair4", "hair5"], index: 0,
    eyes: ["eyes1", "eyes2", "eyes3", "eyes4", "eyes5"], index: 0,
    mouth: ["mouth1", "mouth2", "mouth3", "mouth4", "mouth5"], index: 0,
    shirt: ["shirt1", "shirt2", "shirt3", "shirt4", "shirt5"], index: 0,
    pants: ["pants1", "pants2", "pants3", "pants4", "pants5" ], index: 0,
    shoes: ["shoes1", "shoes2", "shoes3", "shoes4", "shoes5"], index: 0
  }

  return (
    <div className="App">
    <h1>Hello and welcome to my character!</h1>
    <Nav />
    <center>
    <Body attributes={state}/>
    </center>
    </div>
  );
}

export default App;
