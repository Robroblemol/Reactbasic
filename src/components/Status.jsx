import React, { Component } from 'react';

export default class Status extends Component {
    constructor(){
      super();
      this.state = {
        likes:0 
      }
      this.like = this.like.bind(this);
    }
  
    like(){
      console.log('likes');
      this.setState({
        likes: this.state.likes+1
      })
    }
  
    render(){
      return (
        <div className = "status">
          <p>{this.props.mytext}</p>
          <p><button onClick ={this.like}> 
            {this.state.likes} Mi sxatas gin
          </button></p>
        </div>
      );
    }
  }
  