

import './App.css';
import 'react-calendar/dist/Calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UpcommingEvents from "./components/upcommingEvents";





import React, { Component } from 'react';
import Calendar from 'react-calendar';

import Day from './components/day';

import Search from './components/search';

 
class App extends Component {
  
  state = {
    date: new Date(),
    schedule:[],
    search:[]
  }
 
  onChange = date => {
    
    this.setState({ date });
    

    
    
  }
  addTime = state =>{
    
    this.setState({schedule:[...this.state.schedule,state]});
  }
  added = state =>{
    
    
    this.setState({schedule:[...this.state.schedule,state]});
  }
  deleted=name =>{
    
    
    let a =this.state.schedule.filter(each => {
      return Object.keys(each).some(key => key!==name
        

      )
    
    })
    this.setState({schedule:a});
    
    // this.state.filter(event => this.state.schedule.indexOf(event)!==a)
    
  }
  search=name =>{
    
    this.setState({search:[]});
    let a =this.state.schedule.filter(each => {
       return Object.entries(each).some(([key,values]) => values.eventname===name

        

       )
    
    })
    this.setState({search:a});
    
    
    // this.state.filter(event => this.state.schedule.indexOf(event)!==a)
    
  }
 
 
  render() {
    let even;
    
    return (
      <div >
        <div className="row no-gutters">
          <div className="col">
            <div className="alert alert-primary">
            <Calendar
              onChange={this.onChange.bind(even)}
              value={this.state.date}
            />
            {/* <DeleteEvent deleted={this.deleted}/> */}
            <div className="alert alert-info">
              <Search search={this.search} result={this.state.search}/>
              <p><b><u>EVENTS</u></b></p>
              <ul>
            <UpcommingEvents events={this.state.schedule} deleted={this.deleted}/>
            </ul>
            </div>
            </div>
        </div>
        <div className="col-8 alert alert-info">
        
          <Day dat={this.state.date} added={this.added} marking={this.state.schedule}/>
        
        </div>
        </div>
       
        
         
        
        
        
      </div>
    );
  }
}
















export default App;
