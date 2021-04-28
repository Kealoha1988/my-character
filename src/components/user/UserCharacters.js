import React, { Component } from 'react'
import { connect } from 'react-redux';
import SingleUser from './SingleUser'
import { getUsersWithCharacters } from '../../actions';

class UserCharacters extends Component {


  currentUser = () => this.props.currentUser.filter(user => user.id == this.props.cool)


  componentDidMount() {  
  this.props.getUsersWithCharacters()
    }


  render() {
console.log(this.currentUser)
      const characters = () => this.currentUser().map( (user, i) => <SingleUser id={i} key={i} buttonFn={false} name={user.name } characters={user.characters} userId={this.props.cool}/>)

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
      currentUser: state.usersAndCharacters
    }
  }

export default connect(mapStateToProps, { getUsersWithCharacters })(UserCharacters)
