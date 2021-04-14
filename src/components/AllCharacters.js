//this page will show all the characters that are in the database
//user will be able to click on one to see it but not change it ..... hopefully
// will route as index

// import React, { Component } from 'react'
// import attributeReducer from '../reducers/attributeReducer'
// import { getCharacters } from '../actions/index'
// import { connect } from 'react-redux'

import React, { Component } from 'react'
import { connect } from 'react-redux';
import SingleUser from './user/SingleUser'
import { getUsersWithCharacters } from '../actions';

class AllCharacters extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     error: null,
  //     isLoaded: false,
  //     characters: []
  //   };
  // }

  componentDidMount() {  
  this.props.getUsersWithCharacters()
    }
  //   fetch("http://localhost:3001/characters")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         this.setState({
  //           isLoaded: true,
  //           characters: result
  //         });
  //       },
  //       (error) => {
  //         this.setState({
  //           isLoaded: true,
  //           error
  //         });
  //       }
  //     )
  

  render() {
    
  
    // const { error, isLoaded, characters } = this.state;
    // const chars = this.characters.map( (character, i) => <SingleCharacter key={i} title={ character.name } />)

    // if (error) {
    //   return <div>Error: {error.message}</div>;

    // } else if (!isLoaded) {
    //   return <div>Loading...</div>;
    // } else {

      const characters = this.props.usersAndCharacters.map( (user, i) => <SingleUser id={i} name={user.name } characters={user.characters}/> )
      return (
        <>
        <br/><br/>
        { characters }
      {/* <p className="selectorText"> {characters.map((character, i) => <SingleCharacter id={i} name={ character.name } userName={character.user.name} hairIndex={character.hairIndex} eyesIndex={character.eyesIndex} mouthIndex={character.mouthIndex} shirtIndex={character.shirtIndex} pantsIndex={character.pantsIndex} shoesIndex={character.shoesIndex} />)} </p>   */}
      

     </>
      );
    }
  }

  const mapStateToProps = state => {
    return {
      usersAndCharacters: state.usersAndCharacters
    }
  }

export default connect(mapStateToProps, { getUsersWithCharacters })(AllCharacters)
