import React, { Component } from 'react';
import {Button, Form, FormGroup, Label, Input, Col,Row,Container,FormText} from 'reactstrap';
import {MuiThemeProvider,AppBar} from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';

class FormPersonalDetails extends Component{
    continue = e => {
       e.preventDefault();
       this.props.nextStep();
      }
      back = e => {
       e.preventDefault();
       this.props.prevStep();
      }


     render(){  
     const {handleChange,values } = this.props; 
        return(
             <MuiThemeProvider>
                            <Container>
                            <Form model="feedback" className="form text-left" style={styles.row}>
                                <FormGroup row>
                                 <Label md={1}>State</Label>
                                   <Col md={3}> <Input type="select" name="State" id="State"
                                            onChange={handleChange('State')}
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
                                                        onChange={handleChange('district')}
                                                        defaultValue={values.district}/></Col>
                                    
                                                <Label htmlFor="Taluk" md={1}>Taluk</Label>
                                                     <Col md={3}><Input type="text" id="taluk" name="taluk"
                                                        placeholder="Taluk"
                                                        onChange={handleChange('taluk')}
                                                        defaultValue={values.taluk} /></Col>
                                                                     
                                            </FormGroup>
                                            <hr/>
                        <FormGroup row>
                        <Col md={3}>
                        <Label>Are You Interested in Working Abroad?</Label></Col>
                        <Col md={2}>
                          <FormGroup check>
                            <Label check>
                              <Input type="radio" name="radio2" value="Yes" />{' '}
                              Yes
                            </Label>
                          </FormGroup>
                        </Col>
                        <Col md={2}>
                          <FormGroup check>
                            <Label check>
                              <Input type="radio" name="radio2" value="No" />{' '}
                              No
                            </Label>
                          </FormGroup>
                          </Col>
                      </FormGroup>
                      <hr/>
                    <FormGroup row>
             <Label md={1}>Education</Label>
           <Col md={3}> <Input type="select" name="educationType"
                                            onChange={handleChange('educationType')}
                                            defaultValue={values.educationType}>
                                        <option>SSLC</option>
                                        <option>PUC</option>
                                        <option>B.E</option>
                                        <option>M.E</option>
                                        <option>MBA</option>
                                        <option>Bcom</option>
                                        <option>Mcom</option>
                                        <option>B.Sc</option>
                                        <option>B.A</option>
                                        <option>Diploma Engineering</option>
                                        <option>Others</option>
                                    </Input> </Col>
                        
                            <Label md={2} >Field of Specialization</Label>
                                   <Col md={3}> <Input type="select" name="FS" id="FS"
                                            onChange={handleChange('FS')}
                                            defaultValue={values.FS}>
                                        <option>Computer Science</option>
                                        <option>Mechanical</option>
                                        <option>Electronics and Communications</option>
                                        <option>Electrical and Electronics</option>
                                        <option>Civil</option>
                                        <option>Information Science</option>
                                        <option>Marketting</option>
                                        <option>Finance</option>
                                        <option>Human Resource</option>
                                        <option>Administration</option>
                                        <option>Others</option>
                                    </Input> </Col>
                                <Label htmlFor="OC" md={1}>Other Courses</Label>
                                    <Col md={2} ><Input type="text" id="OC" name="OC"
                                        placeholder="Eg. Fashion Designing"
                                        onChange={handleChange('OC')}
                                        defaultValue={values.OC}/></Col>
                                                     
                            </FormGroup>
                            <hr/>
                            <FormGroup row>
                                <Label md={2}>Field of Experience</Label>
                                   <Col md={4}>  <Input type="text" id="FE" name="FE"
                                        placeholder="Eg. Web Developer"
                                        onChange={handleChange('FE')} defaultValue={values.FE}/></Col>
                                <Label md={2}>Years of Experience</Label>
                                   <Col md={4}> <Input type="select" name="YE" id="YE"
                                            onChange={handleChange('YE')}
                                            defaultValue={values.YE}>
                                        <option>Fresher</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                        <option>13</option>
                                        <option>14</option>
                                        <option>15</option>
                                        <option>16</option>
                                        <option>17</option>
                                        <option>18</option>
                                        <option>19</option>
                                        <option>20</option>
                                    </Input>    </Col>                           
                            </FormGroup>
                            <hr/>
                            <FormGroup row>
                            <Label md={12}>Which Job Are You Searching For?</Label>
                                   <Col md={4} style={styles.row}><Label>Main Job</Label>
                                    <Input type="text" name="mainjob"
                                    placeholder="Eg.Front Office"
                                            onChange={handleChange('mainjob')}
                                            defaultValue={values.mainjob}>
                                    </Input> </Col>
                                    <Col md={4} style={styles.row}>
                                     <Label>Sub Job</Label>
                                     <Input type="text" name="subjob"
                                    placeholder="Eg.Computer Operator"
                                            onChange={handleChange('subjob')}
                                            defaultValue={values.subjob}>
                                    </Input> </Col>
                                    <Col md={4} style={styles.row}>
                                <Label>Salary Expectation</Label>
                                <Input type="select" id="SE" name="SE"
                                        onChange={handleChange('SE')}
                                        defaultValue={values.S}>
                                         <option>5000</option>
                                        <option>10000</option>
                                        <option>20000</option>
                                        <option>30000</option>
                                        <option>40000</option>
                                        <option>50000</option>
                                        <option>60000</option>
                                        <option>70000</option>
                                        <option>80000</option>
                                        <option>90000</option>
                                        <option>100000</option>
                                        <option>150000</option>
                                        <option>200000</option>
                                        <option>250000</option>
                                        <option>300000</option> 
                                        </Input> </Col>                                                   
                           <Col md={4} style={styles.row}> <Label>Place of Job</Label>
                                   <Input type="text" id="poj" name="poj"
                                        placeholder="Eg. Mumbai"
                                        onChange={handleChange('poj')}
                                        defaultValue={values.poj} /></Col>
                         </FormGroup>
                         <hr/>
                          <FormGroup>
                            <Label for="exampleFile">Upload Your Photo</Label>
                            <Input type="file" name="file" id="exampleFile" />
                            <FormText color="muted">
                              Mention the size and file formats.
                            </FormText>
                          </FormGroup>
                        <hr/>
                         <FormGroup row>
                                <Label htmlFor="message" md={2}>Any Other Specific Detail?</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message"
                                        rows="12"
                                        onChange={handleChange('message')}
                                        defaultValue={values.message}></Input>
                                </Col>
                            </FormGroup>
                        </Form>
                        <Row className="d-flex justify-content-center flex-wrap">
                    <Col md={2}>
                    <Button type="submit" className="bg-dark"
                    style={styles.button}
                    onClick={this.back}>Back</Button>
                    </Col>
                    <Col md={2}>
                         <RaisedButton
                    label="Submit"
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                    />
                    </Col>
                    </Row>
                        </Container>
                      </MuiThemeProvider> 
        );
    }
}

const styles={
    row:{
    margin:15
},
button:{
    margin:15
}
}
export default FormPersonalDetails;