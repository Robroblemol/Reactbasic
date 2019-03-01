import React, { Component } from 'react';
import './App.css';
//import { Math } from 'core-js';

class Status extends Component {
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

class App extends Component {
  render() {
    return (
      <div className = "App">
        <header className = "App-header">
        <Status mytext = "Uau! Mi skribas en esperanto!" />
        <Status mytext = "Mi volas lerni esperanto!" />
        <Status mytext = "Esperanto estas tre mojoso" />
        <Status mytext = "Mi ne sicas ke skribi en ĉi tie komponanto" />
        </header>
      </div>
    );
  }
}

export default App;
