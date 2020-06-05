import React,{Component} from 'react';


class DeleteEvent extends Component {


    state={
        event:"ex:-'29.May.2020.1AM'"

    }

    onChange = e => {
        
        this.setState({event:e.target.value});
    }
    onSubmit =e =>{
        e.preventDefault();
        this.props.deleted(this.state.event);

    }
    

    render(){
        
        
        

      
        


        return (
        <div>
            <form onSubmit={this.onSubmit.bind(this)}>
                <input type="text" name="event" onChange={this.onChange.bind(this)} value={this.state.event} />
                <input type="submit" value="submit" />
            </form>
        </div>
         
        
            
            
            

            
            
        );
    }



}

export default DeleteEvent;