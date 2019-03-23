import React, { Component } from 'react';

export default class Status extends Component {
    constructor(){
      super();
      this.state = {
        likes:0 
      }
      this.like = this.like.bind(this);
      this.delete = this.delete.bind(this);
      this.edit = this.edit.bind(this);
    }
  
    like(){
      console.log('likes');
      this.setState({
        likes: this.state.likes+1
      })
    }

    delete() {
      console.log('index',this.props.index,this.props)
      this.props.delete(this.props.index);
    }
    edit(){
      console.log('edit!!!! desde Status',this.props)
      this.props.edit(this.props.index,this.props.mytext);

    }
    render(){
      return (
        <div className = "status">
        <div className = "close" onClick={this.delete}>X</div>
        <div className = "edit" onClick={this.edit}>Edit</div>
          <p>{this.props.mytext}</p>
          <p><button onClick ={this.like}> 
            {this.state.likes} Mi sxatas gin
          </button></p>
        </div>
      );
    }
  }
  