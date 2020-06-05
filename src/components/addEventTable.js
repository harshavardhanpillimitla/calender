import React,{Component} from 'react';
import {Modal,Button } from 'react-bootstrap';

class AddEvent extends Component{
    state={
      d:[],

          
        
    }
    

    onChange=e=>{
        let sample=this.props.datetable.split(",");
       

       
        let m=sample[0],date=sample[1],year=sample[2],time=sample[3];
        let id=date+"."+m+"."+year+"."+time;

      
       
        
        let ev={"day":date,"month":m,"year":year,"time":time,"eventname":e.target.value};
        this.setState({d:[]});
        

        this.setState({d:{[id]:ev}});
        
    }

    onSubmit(e){
        e.preventDefault();
     
        this.props.addEventTable(this.state.d);
        this.props.onHide();
        // this.props.AddEvent(this.state);


    }

    

    render( ){


        return (
            <React.Fragment>
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >

            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              ReMeMbEr
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Add to Event </h4>

            <div className="pr-auto pl-auto">
            <form onSubmit={this.onSubmit.bind(this)}>
            <input type="text" name="eventname" value={this.state.eventname} onChange={this.onChange.bind(this)}  />
            <input type="submit" value="submit"  />
            </form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
           </Modal>
           </React.Fragment>
            





   
        

        );




    }



}
export default AddEvent;