import React, { Component } from 'react';
import Status from './Status';

export default class StatusList extends Component {
  
    render(){
      return (
        this.props.statuses.map((stateText , index) =>{
          return <Status key= {index}
                         index={index}
                         mytext = {stateText}
                         delete={this.props.delete}/> 

        })
      );
    }
  }
  