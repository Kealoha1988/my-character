import React, { Component } from 'react'
import { connect } from 'react-redux';
import SingleUser from './user/SingleUser'
import { getUsersWithCharacters } from '../actions';

class AllCharacters extends Component {


  componentDidMount() {  
  this.props.getUsersWithCharacters()
    }

  render() {


      const characters = () => this.props.usersAndCharacters.map( (user, i) => <SingleUser id={i} key={i} buttonFn={true} name={user.name } characters={user.characters}/> )
      return (
        <>
        <br/><br/>
        { characters() }
      
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
