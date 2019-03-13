import React, { Component } from 'react';
import Status from './Status';

export default class StatusList extends Component {
    constructor(){
      super();
      this.state = {
        statuses: [
          "Uau! Mi skribas en esperanto!", 
          "Mi volas lerni esperanto!", 
          "Esperanto estas tre mojoso", 
          "Mi ne sicas ke skribi en ĉi tie komponanto",
        ]
      }
    }
  
    render(){
      return (
        this.state.statuses.map(stateText =>{
          return <Status mytext = {stateText}/>

        })
      );
    }
  }
  