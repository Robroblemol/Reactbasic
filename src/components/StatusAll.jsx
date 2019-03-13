import React, { Component } from 'react';
import StatusList from './StatusList';

export default class StatusAll extends Component {
    constructor(props){
      super(props);
      this.state = {
        newStatusText: 'nova tekto',   
        statuses: [
          "Uau! Mi skribas en esperanto!", 
          "Mi volas lerni esperanto!", 
          "Esperanto estas tre mojoso", 
          "Mi ne sicas ke skribi en ĉi tie komponanto",
        ]
      }
      this.handleChange = this.handleChange.bind(this);
    }
  handleChange(event){
    console.log('event.target.value',event.target.value);
    //debugger;
    this.setState({newStatusText: event.target.value});
  }
    render(){
      return (
          <div>
                <div className = "status">
                    <h1>Alboni nova ŝtaton</h1>
                    <form>
                        <input type= "text" value={this.state.newStatusText} 
                            onChange={this.handleChange}   placeholder="Kio vi volas diri?"/>
                        <button type= "submit">albonu ŝtaton</button>
                    </form>
                </div>
                <div className="status">
                    <h1>ĉioj ŝtatojn</h1>
                    <StatusList statuses= {this.state.statuses}/>
                </div>
          </div>
        );
    }
  }
  