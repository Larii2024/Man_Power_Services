import React, { Component } from 'react';
import {Button, Form, FormGroup, Label, Input, Col,Row,Container,FormText} from 'reactstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

class FormCandiPersonal extends Component{
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
                        <Label htmlFor ="numcandidates" md={3} >Number of candidates required-</Label>
                        <Col md={2}>
                          <Input type="number" id="numcandidates" name="numcandidates"
                          placeholder="Candidates "
                          onChange={handleChange('numcandidates')}
                          defaultValue={values.numcandidates}
                          /></Col>
                        </FormGroup> <hr/>
                        
                    <FormGroup row>
                    <Label md={2}>Type of Job-</Label>
             <Label md={2}>Skilled Job</Label>
           <Col md={3}> <Input type="select" name="jobType"
                                            onChange={handleChange('jobType')}
                                            defaultValue={values.jobType}>
                                        <option>home nurse</option>
                                        <option>cook</option>
                                        <option>front office </option>
                                        <option>back office</option>
                                        <option>CS engineer</option>
                                        <option>Mechanical engineer</option>
                                        <option>E&C engineer</option>
                                        <option>E&E engineer</option>
                                        <option>IS engineer</option>
                                        <option>Driver</option>
                                        <option>sales executive</option>
                                        <option>marketing</option>
                                        <option>admin</option>
                                        <option>accountant</option>
                                        <option>manager</option>
                                        <option>HR</option>
                                        <option>airhostess</option>
                                        <option>Others</option>
                                    </Input> </Col>
                        
                            <Label md={2} >Unskilled jobs</Label>
                                   <Col md={3}> <Input type="select" name="UJ" id="UJ"
                                            onChange={handleChange('UJ')}
                                            defaultValue={values.UJ}>
                                        <option>helper</option>
                                        <option>CNC</option>
                                        <option>sponge worker</option>

                                        <option>Others</option>
                                    </Input> </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                <Label htmlFor="OC" md={1}>Other jobs</Label>
                                    <Col md={2} ><Input type="text" id="OC" name="OC"
                                        placeholder=""
                                        onChange={handleChange('OC')}
                                        defaultValue={values.OC}/></Col>
                                     </FormGroup>
                                                     
                          <hr/>
                            <FormGroup row>
                            <Label md={1} >Education required</Label>
                                   <Col md={3}> <Input type="select" name="ER" id="ER"
                                            onChange={handleChange('ER')}
                                            defaultValue={values.ER}>
                                        <option>Below 7th</option>
                                        <option>below 10th</option>
                                        <option>10th</option>
                                        <option>PUC</option>
                                        <option>B.A</option>
                                        <option>B.E</option>
                                        <option>B.com</option>
                                        <option>diploma engineering</option>
                                        <option>MBA</option>
                                        <option>Others</option>
                                    </Input> </Col>
                            
                                <Label htmlFor="O" md={1}>Other degree</Label>
                                    <Col md={2} ><Input type="text" id="O" name="O"
                                        placeholder=""
                                        onChange={handleChange('O')}
                                        defaultValue={values.O}/></Col>
                                 
                                <Label md={2}>Any other course required</Label>
                                   <Col md={3}> <Input type="select" name=" OCR" id="OCR"
                                            onChange={handleChange('OCR')}
                                            defaultValue={values.OCR}>
                                        <option>Fire&safety</option>
                                        <option>computer</option>
                                        <option>DTP</option>
                                        <option>Film</option>
                                        <option>Designer</option>
                                       
                                        <option>others</option>
                                    </Input>    </Col>    
                                <Label htmlFor="OO" md={1}>Other courses</Label>
                                    <Col md={2} ><Input type="text" id="OO" name="OO"
                                        placeholder=""
                                        onChange={handleChange('OO')}
                                        defaultValue={values.OO}/></Col>

                           
                            </FormGroup>
                    
                            <hr/>

                            <FormGroup row>
                                
                                <Label md={2}> Any Experience required</Label>
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
                                   <Col md={4} style={styles.row}><Label>place of duty</Label>
                                    <Input type="text" name="pod"
                                    placeholder=""
                                            onChange={handleChange('pod')}
                                            defaultValue={values.pod}>
                                    </Input> </Col>
                                    <Col md={4} style={styles.row}><Label>Duty Time</Label>
                                    <Input type="text" name="tod"
                                    placeholder=""
                                            onChange={handleChange('tod')}
                                            defaultValue={values.tod}>
                                    </Input> </Col>

                                    <Col md={4} style={styles.row}><Label>WeeklyOffs</Label>
                                    <Input type="text" name="wo"
                                    placeholder=""
                                            onChange={handleChange('wo')}
                                            defaultValue={values.wo}>
                                    </Input> </Col>
                                    
                                   
                                    <Col md={4} style={styles.row}>
                                <Label>salary scale</Label>
                                <Input type="select" id="salaryscale" name="salaryscale"
                                        onChange={handleChange('salaryscale')}
                                        defaultValue={values.salaryscale}>
                                         <option></option>
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
                           <Col md={4} style={styles.row}> <Label>Facilities By the Company</Label>
                                   <Input type="text" id="facility" name="facility"
                                        placeholder="Eg. food etc"
                                        onChange={handleChange('facility')}
                                        defaultValue={values.facility} /></Col>
                            <Col md={4} style={styles.row}> <Label>Incentives By the Company</Label>
                                   <Input type="text" id="incentives" name="incentives"
                                        placeholder="Eg. ESI etc"
                                        onChange={handleChange('incentives')}
                                        defaultValue={values.incentives} /></Col>
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
export default FormCandiPersonal;