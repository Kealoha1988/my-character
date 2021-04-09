//this page will show all the characters that are in the database
//user will be able to click on one to see it but not change it ..... hopefully
// will route as index

import React, { Component } from 'react'
import attributeReducer from '../reducers/attributeReducer'
import { getCharacters } from '../actions/index'
import { connect } from 'react-redux'

class AllCharacters extends Component {

  componentDidMount(){
    this.props.getCharacters()
  }



  render() {

    const characters = this.props.characters.map(characters, i) => <Character key={i} hairIndex={characters.hairIndex}>


    return (
      <div>
        <h3>{  }</h3>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    characters: state.characters
  }
}

export default connect(mapStateToProps)(AllCharacters)
