import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { setUser } from '../../actions';

class NameForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userName: "",
       id: "",
       words: "what is your name?"

    }
  }

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   this.setState({ name: e.target.value})
  //   console.log("name set!")
  //   console.log(e.target.name)
  // }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value 
    })

    console.log(this.state)
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    // this.setUser()
    // console.log(this.state)
    // // console.log(this.state.userName)
    let strongParams = {
      user: {
          name: this.state.userName, 
      }
  }
  fetch("http://localhost:3001/users", {
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
      },
      body: JSON.stringify(strongParams),
      method: "POST"
  })
  .then(response => response.json())
  .then(user => this.setState({
    userName: user.name,
    id: user.id,
    words: "creator name: " + user.name
  }))

}

handleEdit = (e) => {
  e.preventDefault()
  // this.setUser()
  // console.log(this.state)
  // // console.log(this.state.userName)
  let strongParams = {
    user: {
        name: this.state.userName, 
    }
}
fetch(`http://localhost:3001/users/${this.state.id}`, {
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(strongParams),
    method: "PATCH"
})
.then(response => response.json())
.then(user => this.setState({
  userName: user.name,
  id: user.id,

}))
}



handleDelete = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3001/users/${this.state.id}`, {
      method: "DELETE"
      })
      // window.location.reload()
}



handleSignout = () => window.location.reload()



setOrEdit = () => {
  if (this.state.words === "creator name: can't be blank" || this.state.words === "what is your name?"){
    return <input type="submit"  className="button" onClick={this.handleSubmit} value="set name"></input>
  }
  else {
    return <>
    <input type="submit" className="button" value="edit name" onClick={this.handleEdit}></input>
    <input type="submit" className="button" value="signout" onClick={this.handleSignout}></input>
     <input type="submit" className="button" value="delete me" style={{backgroundColor: "red"}} onClick={this.handleDelete}></input>
     </>

  }
}


  render() {

    return (
      <div>
        <h4 className="selectorText">{this.state.words}</h4>
        <form onClick={this.handleSubmit}>
          <input type="text" className="textBoxes" name="userName" value={this.state.name} onChange={this.handleChange}></input>
        {this.setOrEdit()}
        </form>
      </div>
    )
  }
}
// const mapStateToProps = state => {
//   return {
//     user: state.user
//   }
// }

// export default connect(mapStateToProps, { setUser })(NameForm)
export default NameForm
