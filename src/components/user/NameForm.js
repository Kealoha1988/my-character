import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setUser, editUser } from '../../actions';

class NameForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userName: "",
       id: "",
       words: "what is your name?"
    }
  }


  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  

  handleSubmit = async e => {
    console.log("submitiing me")
    e.preventDefault()
    await this.props.setUser(this.state.userName)
    this.setState({
      userName: this.props.currentUser.userName,
      id: this.props.currentUser.id,
      words: "creator: " + this.props.currentUser.userName
    })
  }

  handleEdit = async e => {
    console.log("editing me")
    e.preventDefault()
    await this.props.editUser(this.state.userName, this.state.id)
    this.setState({
      userName: this.props.currentUser.userName,
      id: this.props.currentUser.id,
      words: "creator: " + this.props.currentUser.userName
    })
  }
  
  
  handleDelete = e => {
    e.preventDefault()
    fetch(`http://localhost:3001/users/${this.state.id}`, {
      method: "DELETE"
      })
      window.location.reload()
    }


handleSignout = () => window.location.reload() && console.log("im out!")



  setOrEdit = () => {
    if (this.state.words === "creator: " || this.state.words === "what is your name?" || this.state.words === "creator: undefined") {
      return <>
        <form onSubmit={this.handleSubmit}>
          <input type="text" className="textBoxes" name="userName" value={this.state.name} onChange={this.handleChange}></input>
          <input type="submit" className="button" onSubmit={this.handleSubmit} value="set name"></input>
        </form>
      </>
    }
    else {
      return <>
        <form onSubmit={this.handleEdit}>
          <input type="text" className="textBoxes" name="userName" value={this.state.name} onChange={this.handleChange}></input>
          <input type="submit" className="button" value="edit name" onSubmit={this.handleEdit}></input>
        </form>
          <input type="submit" className="button" value="signout" onClick={this.handleSignout}></input>
          <input type="submit" className="button" value="delete me" style={{ backgroundColor: "red" }} onClick={this.handleDelete}></input>
      </>
    }
  }




  render() {
    // console.log(this.props.currentUser)
    console.log(this.state)

    return (
      <div>
        <h4 className="selectorText">{this.state.words}</h4>
        {this.setOrEdit()}
    
      </div>
    )
  }
}




const mapStateToProps = state => {
  return {
    currentUser: state.user
  }
}

export default connect(mapStateToProps, { setUser, editUser })(NameForm)
// export default NameForm
