import React,{Component} from 'react';
import AddEvent from './addEvent';





class AddTime extends Component{

    state={
        month:"",
        day:"",
        year:"",
      
        hours:0,
        minutes:0
    }
    
    onChange=e=>{
        // console.log(b);
        let a=this.props.day.toString();
        let b= a.split(" ");
        this.setState({month:b[1],day:b[2],year:b[3]})
        this.setState({[e.target.name]:e.target.value});
        

        
    }
   

    render(){
        


        return (
            <React.Fragment>
            
                <input type="number" name="hours" value={this.state.hours} onChange={this.onChange.bind(this)} />
                <input type="number" name="minutes"  value={this.state.minutes} onChange={this.onChange.bind(this)} />
              
                <AddEvent  eve={this.state} addEvent={this.props.addTime}/>
                
            </React.Fragment>
         

        );
    }
}
export default AddTime;