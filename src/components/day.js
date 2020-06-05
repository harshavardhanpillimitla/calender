import React,{Component} from 'react';
import moment from 'moment';
import AddEventTable from './addEventTable'


class Day extends Component{
    state={
        evedate:'',

        modalShow:false
        
        
        
    }
    componentDidUpdate(prevProps,prevState){
        
        
        

    }
    onClick = e =>{
        this.setState({modalShow:true,evedate:e.target.id});

        
    

        //class
        let sp =e.target.id.split(",");
        let dp2 =this.verify.bind(this);
        e.target.className=dp2(sp[1]+"."+sp[0]+"."+sp[2]+"."+sp[3]);
        
        
        
        

    }
    onver=(dat)=>{
        let sp =dat.split(",");
        let dp2 =this.verify.bind(this);

        
        return dp2(sp[1]+"."+sp[0]+"."+sp[2]+"."+sp[3]);
        
        
        
        
      

    }


    verify(date){
        let a="alert alert-primary";
        
        this.props.marking.map(each=>{
           
            
            if (date in each){
                a="alert alert-warning";
                return a;
                }
        } );
       
        return a;
       

    }
    

 

    render(){
        
        let a=["a","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
        
        let time=["1AM","2AM","3AM","4AM","5AM","6AM","7AM","8AM","9AM","10AM","11AM",
        "12PM","1PM","2PM","3PM","4PM","5PM","6PM","7PM","8PM","9PM","10PM","11PM",]
        var stack=[];
        let f=true;
        let dateof = this.props.dat.toString().split(" ");
        
        
        let da=dateof[2],ma=a.indexOf(dateof[1]).toString(),ya=dateof[3];
        
        let d=da,m=ma,y=ya,dum;
        
       
        let secondverify =d+"."+dateof[1]+"."+y;
        
        var current_date = moment(d+"."+m+"."+y, "DD-MM-YYYY");
        let c1= current_date.toString().split(" ");
        let dd=d,mm=m,yy=y;
        let dp =this.verify.bind(this);
        
        if(c1[0]==="Sun"){
            
            
            
    
            stack.push(c1);
          

        while(f){
           
            var new_date = moment(d+"."+m+"."+y, "DD-MM-YYYY").add('days', 1);
            let c= new_date.toString().split(" ");
           
            stack.push(c);
            
            if(c[0]==="Sun")
            {
                f=false;
            }
           
            d=parseInt(c[2]);
            dum=a.indexOf(c[1]);
            m=dum;
            

            
            d=d.toString();
        }
           
        }
        else{
            
            
            while(f){
           
                var new_date = moment(d+"."+m+"."+y, "DD-MM-YYYY").subtract('days', 1);
                let c= new_date.toString().split(" ");
               
                
                stack.unshift(c);
               
                if(c[0]==="Sun")
                {
                    f=false;
                }
               
                d=parseInt(c[2]);
                dum=a.indexOf(c[1]);
                m=dum;
                
    
                
                d=d.toString();
            }
            c1.push(dp(secondverify));
            stack.push(c1);
            
            
            d=dd;
            m=mm;
            y=yy;
            f=true;
           
            while(f){
                
                var new_date = moment(d+"."+m+"."+y, "DD-MM-YYYY").add('days', 1);
                let c= new_date.toString().split(" ");
             
                
                
                stack.push(c);
                if(c[0]==="Sat")
                {
                    f=false;
                }
               
                d=parseInt(c[2]);
                dum=a.indexOf(c[1]);
                m=dum;
                
    
                d=d.toString();
            }
            

        }
       



        return (
            <React.Fragment>
                
                <table className="ml-auto mr-auto">
                
                <thead >
                    <tr >
                    <th className="px-5">Time</th>
                    <th className="px-3">sun<p>{stack[0][2]}</p></th>
                    <th className="px-3">Mon<p>{stack[1][2]}</p></th>
                    <th className="px-3">Tue<p>{stack[2][2]}</p></th>
                    <th className="px-3">Wed<p>{stack[3][2]}</p></th>
                    <th className="px-3">Thu<p>{stack[4][2]}</p></th>
                    <th className="px-3">Fri<p>{stack[5][2]}</p></th>
                    <th className="px-3">Sat<p>{stack[6][2]}</p></th>
                    </tr>
                    </thead>
                    
               
                    
                    
                
                    <tbody>{time.map(tim =>
                         
                        <tr>
                        <td className="px-4">{tim}-</td>
                        <td id={stack[0].slice(1,4)+","+tim}  className={this.onver(stack[0].slice(1,4)+","+tim)} variant="primary" onClick={this.onClick.bind(this)}></td>
                        <td id={stack[1].slice(1,4)+","+tim}   className={this.onver(stack[1].slice(1,4)+","+tim)} variant="primary"  onClick={this.onClick.bind(this)}></td>
                        <td id={stack[2].slice(1,4)+","+tim}   className={this.onver(stack[2].slice(1,4)+","+tim)} variant="primary"  onClick={this.onClick.bind(this)}></td>
                        <td id={stack[3].slice(1,4)+","+tim}   className={this.onver(stack[3].slice(1,4)+","+tim)} variant="primary" onClick={this.onClick.bind(this)}></td>
                        <td id={stack[4].slice(1,4)+","+tim}   className={this.onver(stack[4].slice(1,4)+","+tim)} variant="primary" onClick={this.onClick.bind(this)}></td>
                        <td id={stack[5].slice(1,4)+","+tim}   className={this.onver(stack[5].slice(1,4)+","+tim)} variant="primary"  onClick={this.onClick.bind(this)}></td>
                        <td id={stack[6].slice(1,4)+","+tim}    className={this.onver(stack[6].slice(1,4)+","+tim)} variant="primary"   onClick={this.onClick.bind(this)}></td>
                        </tr>
                        
                    
                    )}
                        
                    </tbody>
                   

                    
                </table>
                <AddEventTable datetable={this.state.evedate} addEventTable={this.props.added} show={this.state.modalShow} onHide={() => this.setState({...this.state,modalShow:false})}/>
            </React.Fragment>

        );
    }

}



export default Day;
