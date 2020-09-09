import React,{Component}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormCandi from './formcandi';
import FormCandiPersonal from './formcandiPersonal';
import Success from './success';


export class Candiform extends Component{
    state={
        step:1,
   }

     // proceed to next step
     nextStep=()=>{
         const{step} = this.state; 
         this.setState({
             step:step+1
         });
     }
     //go to previous step
     prevStep=()=>{
        const{step} = this.state; 
        this.setState({
            step:step-1
        });
     }
      handleChange = input=> e =>{
         this.setState({[input]:e.target.value});
     }
    
    render(){
        const{step}=this.state;
        const{firstName,lastname,middlename,email,dob,telnum,gender,companyname,district,taluk,State,numcandidates,jobType,ER,O,OO,OCR,YE,pod,tod,wo,salaryscale,facility,incentives,message}=this.state;
        const values={firstName,lastname,middlename,email,dob,telnum,gender,companyname,district,taluk, State,numcandidates,jobType,ER,O,OO,OCR,YE,pod,tod,wo,salaryscale,facility,incentives,message}
        switch (step) {
            case 1:
              return (
                <FormCandi
                  nextStep={this.nextStep}
                  handleChange={this.handleChange}
                 values= {values}
                />
              );
            case 2:
              
              return (
                <FormCandiPersonal
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                 handleChange={this.handleChange}
                 values= {values}/>
              );
              
          
            case 3:
              return <Success
                       prevStep={this.prevStep}/>
            default:
              return <h1>Mub Matin</h1>
          }
    }
}

export default Candiform;