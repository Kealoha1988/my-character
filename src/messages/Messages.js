import React, { Component } from 'react'
// import MessageBox from './MessageBox'
import MessageTemplate from './MessageTemplate'
import { connect } from 'react-redux'
import {getMessages} from '../actions'



export class Messages extends Component {

  state = {
    text: ""
  }

  componentDidMount() {  
    this.props.getMessages()
      }

  render() {


    const allMessages = () => this.props.messages.map( (m, i) => <MessageTemplate id={i} key={i} content={m.content } creator={m.user.name}/> )

    const handleChange = (e) => this.setState({text: e.target.value})

    const setMessage = async (text) => {
      const strongParams = {
        message: {
          content: this.state.text,
          user_id: this.props.userId
        }
      }
      try {
        const resp = await fetch("http://localhost:3001/messages", {
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(strongParams),
          method: "POST"
        })
 
        if (!resp.ok) {
          throw new Error(`HTTP error! status: ${resp.status}`)
        }
      }
       catch (e) {
        console.log(e)
      }
    }

    return (
      <div>
              <center>
      <h4 className="selectorText" id="h4">messages</h4>
      </center>
      {allMessages()}
      <br />

      <div>
      <h3 style={{color: 'pink'}}>{this.state.text}</h3>
        <input type="text" value={this.state.text} onChange={handleChange}></input>
        <button className="button" onClick={() => setMessage(this.state.text)}>send message</button>
    </div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps, { getMessages })(Messages)
