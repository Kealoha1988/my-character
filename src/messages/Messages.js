import React, { Component } from 'react'
import MessageBox from './MessageBox'
import MessageTemplate from './MessageTemplate'
import { connect } from 'react-redux'
import {getMessages} from '../actions'

export class Messages extends Component {

  componentDidMount() {  
    this.props.getMessages()
      }

  render() {

    const allMessages = () => this.props.messages.map( (m, i) => <MessageTemplate id={i} key={i} content={m.content } creator={m.user.name}/> )

    return (
      <div>
              <center>
      <h4 className="selectorText" id="h4">messages</h4>
      </center>
      {allMessages()}
      <br />
      <MessageBox />
        
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
