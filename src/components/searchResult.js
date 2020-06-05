import React,{Component} from 'react';
import {Modal,Button } from 'react-bootstrap';

class SearchResult extends Component{
    state={
    

          
        
    }
    


      
       



    

    render( ){
      
        let a=this.props.result.map(r =>
              Object.entries(r).map(([key,val]) => {return [val.day,val.month,val.year]} )
              
            )
       


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
              check may be this
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
             <li>
            <p>{a}</p>
            </li> 

            
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
           </Modal>
           </React.Fragment>
            





   
        

        );




    }



}
export default SearchResult;