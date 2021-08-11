import React, { Component } from 'react'
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

    const approveMessage = (e) => {
      e.preventDefault()
      console.log(this.state.text.length)
      if (this.state.text.length < 50){
        setMessage()
      }else{
          this.setState({text: "message too long. please keep messages under 50 characters"})
          setTimeout(() => this.setState({text: ""}), 2000)
        }
      }

    const setMessage = async () => {
      // e.preventDefault()
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

        this.props.getMessages()
        this.setState({text: ""})

        if (!resp.ok) {
          throw new Error(`HTTP error! status: ${resp.status}`)
        }
      }
       catch (error) {
        console.log(error)
      }
    }



    return (
      <div>
              <center>
                <br/>
                <br/>
      {/* <h4 className="selectorText" id="h4">message feed</h4> */}
      </center>
      {allMessages()}
      <br />

      <div>
      <h3 style={{color: 'pink'}}>{this.state.text}</h3>
      <form onSubmit={approveMessage}>
        <input type="text" value={this.state.text} onChange={handleChange}></input>
        <button type="submit" className="button" onClick={approveMessage}>send message</button>
      </form>
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
