import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input, Col,Row,Container,FormText,FormFeedback} from 'reactstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

 class FormNurse extends Component{
   
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
                                <Col md={5}>
                                 <Input type="tel" id="telnum1" name="telnum1"
                                        placeholder="Contact Number"
                                        onChange={handleChange('telnum1')} 
                                        defaultValue={values.telnum}/>
                                </Col>
                                <Col md={5}>
                                <Input type="tel" id="telnum2" name="telnum2"
                                        placeholder="whats app Number"
                                        onChange={handleChange('telnum2')} 
                                        defaultValue={values.telnum}/> 
                                </Col>
                    </FormGroup>
                    <FormGroup row>
                                 <Col md={10}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        onChange={handleChange('email')}
                                        defaultValue={values.email} />
                                </Col>
                            </FormGroup>


                     <FormGroup row>
                                <Col md={5}>
                                    <Input type="text" id="firstName" name="firstName"
                                        placeholder="First Name"
                                        onChange={handleChange('firstName')} 
                                        defaultValue={values.firstName}/>
                                </Col>
                                <Col md={5}>
                                    <Input type="text" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        onChange={handleChange('lastname')} 
                                         defaultValue={values.lastname}/>
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

export default FormNurse;