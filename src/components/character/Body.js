// make an arry of diff body "male" "female" that are chosen from the dropdown in the nav.
// when the user clicks on it i will render on the character
// for now trying to make it user with words that render in app.  
// later convert to images or svgs
import Eyes from './Eyes'
import Hair from './Hair'
import Mouth from './Mouth'
import Shirt from './Shirt'
import Pants from './Pants'
import Shoes from './Shoes'



import React, { Component } from 'react'

export class Body extends Component {

  

  state = {
    hair: {kind: '',
          color: ''},
    eye: {kind: '',
          color: ''},
    mouth: {kind: '',
          color: ''},
    shirt: {kind: '',
          color: ''},
    pants: {kind: '',
          color: ''},
    shoes: {kind: '',
          color: ''}
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  handleSubmit = () => {
    
    this.props.setAttribute(this.state)
  }

  render() {
    return (
      <div className="characterBody">
        <Hair className="hair"  name="hair" hair={this.state.hair}/>
        <Eyes onChange={this.handleChange} eyes={this.state.eyes}/>
        <Mouth onChange={this.handleChange} mouth={this.state.mouth}/>
        <Shirt onChange={this.handleChange} shirt={this.state.shirt}/>
        <Pants onChange={this.handleChange} pants={this.state.pants}/>
        <Shoes onChange={this.handleChange} shoes={this.state.shoes}/>
      </div>
    )
  }
}

export default Body
