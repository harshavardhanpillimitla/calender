import React,{Component} from 'react';


class Events extends Component {


    state={

    }
    componentDidUpdate(prevState,prevProps)
    {
        

    }
    onClick=e =>{
        
        this.props.deleted(e.target.id);

    }

    render(){
        let a= this.props.event;
        
     
        
        

      
        


        return (
        <div>
        <p><li>{a.day}{a.month}{a.year}{a.eventname}{a.time}-<button className="alert alert-danger p-0 ml-auto mr-auto"  id={a.day+"."+a.month+"."+a.year+"."+a.time }onClick={this.onClick.bind(this)}>delete</button></li></p>
        </div>
         
        
            
            
            

            
            
        );
    }



}

export default Events;