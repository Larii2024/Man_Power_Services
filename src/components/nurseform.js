import React,{Component}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormNurse from './formnurse';
import FormNursePersonal from './formnursePersonal';
import Success from './success';


export class Nurseform extends Component{
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
        const{firstName,lastname,email,telnum1,telnum2,district,taluk,State,patientfirstName,patientlastname,patientage,serviceneed,symptoms,dutyType,message}=this.state;
        const values={firstName,lastname,email,telnum1,telnum2,district,taluk, State,patientfirstName,patientlastname,patientage,serviceneed,symptoms,dutyType,message}
        switch (step) {
            case 1:
              return (
                <FormNurse
                  nextStep={this.nextStep}
                  handleChange={this.handleChange}
                 values= {values}
                />
              );
            case 2:
              
              return (
                <FormNursePersonal
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                 handleChange={this.handleChange}
                 values= {values}/>
              );
              
          
            case 3:
              return <Success 
                       prevStep={this.prevStep}/>
            default:
              return <h1>mub Matin</h1>
          }
    }
}

export default Nurseform;