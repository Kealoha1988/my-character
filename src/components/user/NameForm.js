import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setUser, editUser, getUserState } from '../../actions'


class NameForm extends Component {

  componentDidMount(){
    this.props.getUserState()
  }



  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  

  handleSubmit = e => {
    console.log("submiting me")
    e.preventDefault()
    this.props.setUser(document.getElementById("submitInput").value)
  }

  handleEdit = e => {
    console.log("editing me")
    e.preventDefault()
    // console.log(document.getElementById("editInput").value)
    // console.log(this.props.currentUser.id)

    this.props.editUser(document.getElementById("editInput").value, this.props.currentUser.id)
  }
  
  
  handleDelete = e => {
    e.preventDefault()
    fetch(`http://localhost:3001/users/${this.props.currentUser.id}`, {
      method: "DELETE"
      })
      window.location.reload()
    }


handleSignout = () => window.location.reload() && console.log("im out!")



  setOrEdit = () => {
    if (this.props.currentUser.words === "creator: " || this.props.currentUser.words === "what is your name?" || this.props.currentUser.words === "creator: undefined") {
      return <>
        <form onSubmit={this.handleSubmit}>
          <input id="submitInput" type="text" className="textBoxes" name="userName" value={this.props.currentUser.name} onChange={this.handleChange}></input>
          <input type="submit" className="button" onSubmit={this.handleSubmit} value="set name"></input>
        </form>
      </>
    }
    else {
      return <>
        <form onSubmit={this.handleEdit}>
          <input id="editInput" type="text" className="textBoxes" name="userName" value={this.props.currentUser.name} onChange={this.handleChange}></input>
          <input type="submit" className="button" value="edit name" onSubmit={this.handleEdit}></input>
        </form>
        <div className="signoutDelete">
          <input type="submit" className="button" value="signout" onClick={this.handleSignout}></input>
          <input type="submit" className="button" value="delete me" style={{ backgroundColor: "red" }} onClick={this.handleDelete}></input>
        </div>
      </>
    }
  }




  render() {
    // console.log(this.props.currentUser)
    

    return (
      <div>
        <h4 className="selectorText" value="Hello World">{this.props.currentUser.words}</h4>
        {this.setOrEdit()}
    
      </div>
    )
  }
}




const mapcurrentUserToProps = currentUser => {
  return {
    currentUser: currentUser.user
  }
}

export default connect(mapcurrentUserToProps, { getUserState, setUser, editUser })(NameForm)
// export default NameForm
