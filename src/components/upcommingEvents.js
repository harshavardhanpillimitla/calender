import React,{Component} from 'react';
import Events from './event';


class UpcommingEvents extends Component {


    state={
        event:[],

    }
    componentDidUpdate(prevState,prevProps)
    {
        

    }

    render(){
       let states=this.props.events;
    //    let sta = states.map(event => {
           
    //          event.map(ev => ev.eventname)
    
    //       })
 
    let b=[];
    Object.entries(states).map(([key, value]) => {
        // Pretty straightforward - use key for the key and value for the value.
        // Just to clarify: unlike object destructuring, the parameter names don't matter here.
        
        Object.entries(value).map(([key,value]) =>{
            b.push(value)

        });
        
        
    });

    
    
        


        return (
            
             b.map((even) => (<Events event={even} deleted={this.props.deleted}/>))
            
            
            

            
            
        );
    }



}

export default UpcommingEvents;