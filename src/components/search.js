import React,{Component} from 'react';
import SearchResult from './searchResult'

class Search extends Component {


    state={
        event:"",
        modalShow:false

    }

    onChange = e => {
        
        this.setState({event:e.target.value});

    }
    onSubmit =e =>{
        e.preventDefault();
        this.props.search(this.state.event);
        this.setState({modalShow:true});

        

    }
    

    render(){
        
        
        

      
        


        return (
        <div>
            <form onSubmit={this.onSubmit.bind(this)}>
                <input type="text" name="event" onChange={this.onChange.bind(this)} value={this.state.event} />
                <input type="submit" value="search" variant="primary" />
            </form>
            <ul>
            <SearchResult show={this.state.modalShow} onHide={() => this.setState({...this.state,modalShow:false})} result={this.props.result}/>
            </ul>
        </div>
         
        
            
            
            

            
            
        );
    }



}

export default Search;