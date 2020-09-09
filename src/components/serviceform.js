import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, FormGroup, Label, Input, Col,Row,Container,FormText,FormFeedback} from 'reactstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Success from './success';

 class Sf extends Component{
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
        const{firstName,lastname,email,telnum1,telnum2,district,taluk,State,message}=this.state;
        const values={firstName,lastname,email,telnum1,telnum2,district,taluk, State,message}
        switch (step) {
            case 1:
             return( <MuiThemeProvider>
                <React.Fragment>
                    <Container>
                    <Form styles={styles.row} className="text-left">
                    <hr/>
                    <FormGroup row>
                                <Col md={3}>
                                 <Input type="tel" id="telnum1" name="telnum1"
                                        placeholder="Contact Number"
                                        onChange={this.handleChange('telnum1')} 
                                        defaultValue={values.telnum}/>
                                </Col>
                                <Col md={3}>
                                <Input type="tel" id="telnum2" name="telnum2"
                                        placeholder="whats app Number"
                                        onChange={this.handleChange('telnum2')} 
                                        defaultValue={values.telnum}/> 
                                </Col>
                                 <Col md={6}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        onChange={this.handleChange('email')}
                                        defaultValue={values.email} />
                                </Col>
                            </FormGroup>


                     <FormGroup row>
                                <Col md={6}>
                                    <Input type="text" id="firstName" name="firstName"
                                        placeholder="First Name"
                                        onChange={this.handleChange('firstName')} 
                                        defaultValue={values.firstName}/>
                                </Col>
                                <Col md={6}>
                                    <Input type="text" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        onChange={this.handleChange('lastname')} 
                                         defaultValue={values.lastname}/>
                                </Col>
                            </FormGroup>
                            <hr/>
                           <FormGroup row>
                                 <Label md={1}>State</Label>
                                   <Col md={3}> <Input type="select" name="State" id="State"
                                            onChange={this.handleChange('State')}
                                             defaultValue={values.State}>
                                        <option>Andhra Pradesh</option>
                                        <option>Arunanchal Pradesh</option>
                                        <option>Assam</option>
                                        <option>Bihar</option>
                                        <option>Chattisgarh</option>
                                        <option>Goa</option>
                                        <option>Gujarat</option>
                                        <option>Haryana</option>
                                        <option>Himachal Pradesh</option>
                                        <option>Jammu and Kashmir</option>
                                        <option>Jharkhand</option>
                                        <option>Karnataka</option>
                                        <option>Kerala</option>
                                        <option>Madhya Pradesh</option>
                                        <option>Maharashtra</option>
                                        <option>Manipur</option>
                                        <option>Meghalaya</option>
                                        <option>Mizoram</option>
                                        <option>Nagaland</option>
                                        <option>Orissa</option>
                                        <option>Punjab</option>
                                        <option>Rajasthan</option>
                                        <option>Sikkim</option>
                                        <option>Tamil Nadu</option>
                                        <option>Telangana</option>
                                        <option>Tripura</option>
                                        <option>Uttar Pradesh</option>
                                        <option>Uttarakhand</option>
                                        <option>West Bengal</option>
                                    </Input>  </Col>
                                    <Label htmlFor="District" md={1}>District</Label>
                                                   <Col md={3}> <Input type="text" id="District" name="District"
                                                        placeholder="District"
                                                        onChange={this.handleChange('district')}
                                                        defaultValue={values.district}/></Col>
                                    
                                                <Label htmlFor="Taluk" md={1}>Taluk</Label>
                                                     <Col md={3}><Input type="text" id="taluk" name="taluk"
                                                        placeholder="Taluk"
                                                        onChange={this.handleChange('taluk')}
                                                        defaultValue={values.taluk} /></Col>
                                                                     
                                            </FormGroup>
                                            <hr/>
                                            <FormGroup row>
                                              <Col md={12}>
                                <Label htmlFor="message">Any Other Specific Detail?</Label>
                              
                                    <Input type="textarea" id="message" name="message"
                                        rows="10"
                                        onChange={this.handleChange('message')}
                                        defaultValue={values.message}></Input>
                                </Col>
                            </FormGroup>
                            </Form>

                    <br/>
                     <Button type="submit" className="bg-primary"
                    style={styles.button}
                    onClick={this.nextStep}>Submit</Button>
                    </Container>
                     </React.Fragment>
            </MuiThemeProvider>
               
        );
        case 2:
         return <Success 
                       prevStep={this.prevStep}/>
        default:
         return <h1>mub larina</h1>
    }
}
 }  
        const styles={
               row:{
            margin:100
        },
            button:{
                margin:15
            }
        }

export default Sf;