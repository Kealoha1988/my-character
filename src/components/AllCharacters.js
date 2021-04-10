//this page will show all the characters that are in the database
//user will be able to click on one to see it but not change it ..... hopefully
// will route as index

// import React, { Component } from 'react'
// import attributeReducer from '../reducers/attributeReducer'
// import { getCharacters } from '../actions/index'
// import { connect } from 'react-redux'

import React, { Component } from 'react'
import SingleCharacter from './SingleCharacter'

class AllCharacters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      characters: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/characters")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            characters: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, characters } = this.state;
    // const chars = this.characters.map( (character, i) => <SingleCharacter key={i} title={ character.name } />)

    if (error) {
      return <div>Error: {error.message}</div>;

    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
        <br/><br/>
      <p className="selectorText"> {characters.map((character, i) => <SingleCharacter id={i} name={ character.name } userName={character.user.name} hairIndex={character.hairIndex} eyesIndex={character.eyesIndex} mouthIndex={character.mouthIndex} shirtIndex={character.shirtIndex} pantsIndex={character.pantsIndex} shoesIndex={character.shoesIndex} />)} </p>  
      

     </>
      );
    }
  }
}

export default AllCharacters
