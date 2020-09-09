import React,{Component}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormUserDetails from './formuser';
import FormPersonalDetails from './formpersonal';
import Success from './success';


export class Userform extends Component{
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
        const{firstName,lastname,email,age,telnum,gender, district,taluk,State,educationType,OC,FS,FE,YE,subjob,mainjob,poj,message}=this.state;
        const values={firstName,lastname,email,age,telnum,gender,district,taluk, State,educationType, OC, FS, FE,YE,subjob,mainjob,poj,message}
        switch (step) {
            case 1:
              return (
                <FormUserDetails
                  nextStep={this.nextStep}
                  handleChange={this.handleChange}
                 values= {values}
                />
              );
            case 2:
              
              return (
                <FormPersonalDetails
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                 handleChange={this.handleChange}
                 values= {values}/>
              );
              
          
            case 3:
              return <Success 
                       prevStep={this.prevStep}/>
            default:
              return <h1>mub larina</h1>
          }
    }
}

export default Userform;