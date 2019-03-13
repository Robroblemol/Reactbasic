import React, { Component } from 'react';
import Status from './Status';

export default class StatusList extends Component {
  
    render(){
      return (
        this.props.statuses.map((stateText , index) =>{
          return <Status key= {index} mytext = {stateText}/>

        })
      );
    }
  }
  