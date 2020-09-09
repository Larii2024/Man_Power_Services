import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, FormGroup, Label, Input, Col,Row,Container,FormText,FormFeedback} from 'reactstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

 class FormUserDetails extends Component{
   
   continue = e => {
       e.preventDefault();
       this.props.nextStep();
      }

    render(){
        const {values,handleChange} = this.props;
        return( <MuiThemeProvider>
                <React.Fragment>
                    <Container>
                    <Form styles={styles.row} className="text-left">
                    <hr/>
                     <FormGroup row>
                                <Col md={6}>
                                    <Input type="text" id="firstName" name="firstName"
                                        placeholder="First Name"
                                        onChange={handleChange('firstName')} 
                                        defaultValue={values.firstName}/>
                                </Col>
                                <Col md={6}>
                                    <Input type="text" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        onChange={handleChange('lastname')} 
                                         defaultValue={values.lastname}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={4}>
                                 <Input type="tel" id="telnum" name="telnum"
                                        placeholder="Contact Number"
                                        onChange={handleChange('telnum')} 
                                        defaultValue={values.telnum}/>
                                </Col>
                                <Col md={8}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        onChange={handleChange('email')}
                                        defaultValue={values.email} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                            <Label md={2}>Date of Birth</Label>
                            <Col md={10}>
                            <Input  name="dob"  type="date"  
                            className="form-control"  
                            onChange={handleChange('dob')} 
                            defaultValue={values.dob}/>
                            </Col>
                            </FormGroup>
                            <FormGroup row>
                            <Col md={2}><Label>Gender</Label></Col>
                        <Col md={1}>
                          <FormGroup check>
                            <Label check>
                              <Input type="radio" name="radio2" value="Male" />{' '}
                              Male
                            </Label>
                          </FormGroup>
                        </Col>
                        <Col md={1}>
                          <FormGroup check>
                            <Label check>
                              <Input type="radio" name="radio2" value="Female" />{' '}
                              Female
                            </Label>
                          </FormGroup>
                        </Col>
                          <Col md={1}>
                          <FormGroup check>
                            <Label check>
                              <Input type="radio" name="radio2" value="Other" />{' '}
                              Other
                            </Label>
                          </FormGroup>
                          </Col>
                            </FormGroup>
                            </Form>

                    <br/>
                     <Button type="submit" className="bg-primary"
                    style={styles.button}
                    onClick={this.continue}>Continue</Button>
                    </Container>
                     </React.Fragment>
            </MuiThemeProvider>
               
        );
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

export default FormUserDetails;