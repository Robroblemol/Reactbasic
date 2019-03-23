import React, { Component } from 'react';
import StatusList from './StatusList';
//import EditForm from './EditForm';

import './Status.css';

export default class StatusAll extends Component {
    constructor(props){
      super(props);
      this.state = {
        editStatusText:'',
        newStatusText: '', 
        indexStatus:'',  
        editflag:false,
        statuses: [
          "Uau! Mi skribas en esperanto!", 
          "Mi volas lerni esperanto!", 
          "Esperanto estas tre mojoso", 
          "Mi ne sicas ke skribi en ĉi tie komponanto",
        ]
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleChangeEdit = this.handleChangeEdit.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.delete = this.delete.bind(this);
      this.edit = this.edit.bind(this);
      this.setEdit = this.setEdit.bind(this);
    }
  handleChange(event){
    //console.log('event.target.value',event.target.value);
    //debugger;
    this.setState({newStatusText: event.target.value});
  }
  handleChangeEdit(event){
    //console.log('event.target.value',event.target.value);
    //debugger;
    this.setState({editStatusText: event.target.value});
  }
  handleSubmit(event){
    //hacce que e l form no lance a una nueva pagina (o refresque)
    //se quedara en la misma pagina 
    event.preventDefault();
    let newStatuses = [this.state.newStatusText, ...this.state.statuses];
    this.setState({
      newStatusText: '',
      indexStatus: '',
      editStatusText:'',
      statuses: newStatuses,

    });
  }
  delete(index){
    let copy =[...this.state.statuses];
    copy.splice(index, 1);
    this.setState({statuses: copy});
  }
  edit(index,textEdit){
    console.log('index: ',{index},' Textedit: ',{textEdit})
    this.setState({
      editStatusText: textEdit,
      editflag:true,
      indexStatus: index,
    })
    //copy.filter(index);

  }
  setEdit(event){
    event.preventDefault();
    console.log('indexStatus: ',
                this.state.indexStatus,
                'editStatusText ',
                this.state.editStatusText);
    if(this.state.editflag){
      let editStatus = [...this.state.statuses];
      editStatus.splice(this.state.indexStatus,1,this.state.editStatusText);
    
      this.setState({
        editStatusText:'',
        newStatusText: '', 
        indexStatus:'',
        editflag:false,
        statuses: editStatus,  
       })
    
    }


}
    render(){
      return (
          <div>
                <div className = "status">
                    <h1>Alboni nova ŝtaton</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input type= "text" 
                               value={this.state.newStatusText} 
                               onChange={this.handleChange}   placeholder="Kio vi volas diri?"/>
                        <button type= "submit">albonu ŝtaton</button>
                    </form>
                </div>
                <div className = "status">
                 <div className = "status">
                      <h1>Redakti</h1>
                      <form onSubmit={this.setEdit}>
                          <input type= "text" 
                                 value={this.state.editStatusText} 
                                 onChange={this.handleChangeEdit}/>
                          <button type= "submit">fari</button>
                      </form>
                  </div>
                </div>
                <div className="status">
                    <h1>ĉioj ŝtatojn</h1>
                    <StatusList statuses= {this.state.statuses}
                                delete={this.delete}
                                edit={this.edit}/>
                </div>
          </div>
        );
    }
  }
  