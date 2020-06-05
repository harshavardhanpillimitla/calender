import React,{Component} from 'react';

class AddEvent extends Component{
    state={
       eventname:""

        
    }
    

    onChange=e=>{
        this.setState({...this.props.eve,eventname:e.target.value})
    }

    onSubmit(e){
        e.preventDefault();
        this.props.addEvent(this.state);


    }
    

    render( ){


        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                <input type="text" name="eventname" value={this.state.eventname} onChange={this.onChange.bind(this)}  />
                <input type="submit" value="submit"  />
                </form>
            </div>
        );




    }



}
export default AddEvent;