import React, { Component } from 'react';
import StatusList from './StatusList';

export default class StatusAll extends Component {
    constructor(props){
      super(props);
      this.state = {
        newStatusText: '',   
        statuses: [
          "Uau! Mi skribas en esperanto!", 
          "Mi volas lerni esperanto!", 
          "Esperanto estas tre mojoso", 
          "Mi ne sicas ke skribi en ĉi tie komponanto",
        ]
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  handleChange(event){
    //console.log('event.target.value',event.target.value);
    //debugger;
    this.setState({newStatusText: event.target.value});
  }
  handleSubmit(event){
    //hacce que e l form no lance a una nueva pagina (o refresque)
    //se quedara en la misma pagina 
    event.preventDefault();
    let newStatuses = [this.state.newStatusText, ...this.state.statuses];
    this.setState({
      newStatusText: '',
      statuses: newStatuses,

    });
  }
    render(){
      return (
          <div>
                <div className = "status">
                    <h1>Alboni nova ŝtaton</h1>
                    <form onSubmit={this.handleSubmit}>
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
  