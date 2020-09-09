import React, { Component } from 'react';
import {Button, Form, FormGroup, Label, Input, Col,Row,Container,FormText} from 'reactstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

class FormNursePersonal extends Component{
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
                                <Col md={6}>
                                    <Input type="text" id="patientfirstName" name="patientfirstName"
                                        placeholder="patient First Name"
                                        onChange={handleChange('patient firstName')} 
                                        defaultValue={values.patientfirstName}/>
                                </Col>
                                <Col md={6}>
                                    <Input type="text" id="patientlastname" name="patientlastname"
                                        placeholder="patient Last Name"
                                        onChange={handleChange('patient lastname')} 
                                         defaultValue={values.patientlastname}/>
                                </Col>
                            </FormGroup>  

               
                    <FormGroup row>
            <Col md={3}> <Label>Service Needed</Label>
            <Input type="select" name="serviceneed"
                                            onChange={handleChange('serviceneed')}
                                            defaultValue={values.serviceneed}>
                                        <option>Patient care</option>
                                        <option>baby care</option>
                                        <option>old age care</option>
                                      <hr/>
                                    </Input></Col>
                        <Col md={2}>
                        <Label>Patient's Gender</Label>
                          <FormGroup check>
                            <Label check>
                              <Input type="radio" name="radio2" value="Male" />{' '}
                              Male                            
                              </Label>
                          </FormGroup>
                          <FormGroup check>
                            <Label check>
                              <Input type="radio" name="radio2" value="Female" />{' '}
                              Female
                            </Label>
                          </FormGroup>
                          <FormGroup check>
                            <Label check>
                              <Input type="radio" name="radio2" value="Other" />{' '}
                              Other
                            </Label>
                          </FormGroup>
                        </Col>
                               <Col md={3}> <Label>Patient age</Label>
                                    <Input type="select" name="patientage" id="patientage"
                                            onChange={handleChange('patientage')}
                                            defaultValue={values.patientage}>
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
                                        <option>21</option>
                                        <option>22</option>
                                        <option>23</option>
                                        <option>24</option>
                                        <option>25</option>
                                        <option>26</option>
                                        <option>27</option>
                                        <option>28</option>
                                        <option>29</option>
                                        <option>30</option>
                                        <option>31</option>
                                        <option>32</option>
                                        <option>33</option>
                                        <option>34</option>
                                        <option>35</option>
                                        <option>36</option>
                                        <option>37</option>
                                        <option>38</option>
                                        <option>39</option>
                                        <option>40</option>
                                        <option>41</option>
                                        <option>42</option>
                                        <option>43</option>
                                        <option>44</option>
                                        <option>45</option>
                                        <option>46</option>
                                        <option>47</option>
                                        <option>48</option>
                                        <option>49</option>
                                        <option>50</option>
                                        <option>51</option>
                                        <option>52</option>
                                        <option>53</option>
                                        <option>54</option>
                                        <option>55</option>
                                        <option>56</option>
                                        <option>57</option>
                                        <option>58</option>
                                        <option>59</option>
                                        <option>60</option>
                                        <option>61</option>
                                        <option>62</option>
                                        <option>63</option>
                                        <option>64</option>
                                        <option>65</option>
                                        <option>66</option>
                                        <option>67</option>
                                        <option>68</option>
                                        <option>69</option>
                                        <option>70</option>
                                        <option>71</option>
                                        <option>72</option>
                                        <option>73</option>
                                        <option>74</option>
                                        <option>75</option>
                                        <option>76</option>
                                        <option>77</option>
                                        <option>78</option>
                                        <option>79</option>
                                        <option>80</option>
                                        <option>81</option>
                                        <option>82</option>
                                        <option>83</option>
                                        <option>84</option>
                                        <option>85</option>
                                        <option>86</option>
                                        <option>87</option>
                                        <option>88</option>
                                        <option>89</option>
                                        <option>90</option>
                                        <option>91</option>
                                        <option>92</option>
                                        <option>93</option>
                                        <option>94</option>
                                        <option>95</option>
                                        <option>96</option>
                                        <option>97</option>
                                        <option>98</option>
                                        <option>99</option>
                                        <option>100</option>
                                    </Input>    </Col>  

                            <Col md={4}> <Label>Duty type</Label>
                             <Input type="select" name="dutyType"
                                            onChange={handleChange('dutyType')}
                                            defaultValue={values.dutyType}>
                                        <option>Full duty</option>
                                        <option>Day duty</option>
                                        <option>Hour duty</option>
                                      
                                    </Input> </Col>
                                </FormGroup>                         
                                <hr/>
                            <FormGroup row>
                              <Col md={6}>
                                <Label htmlFor="symptoms">Patient symptoms</Label>
                              
                                    <Input type="textarea" id="symptoms" name="symptoms"
                                        rows="6"
                                        onChange={handleChange('symptoms')}
                                        defaultValue={values.symptoms}></Input>
                                </Col>
                                  <Col md={6}>
                                <Label htmlFor="message">Any Other Specific Detail?</Label>
                              
                                    <Input type="textarea" id="message" name="message"
                                        rows="6"
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
export default FormNursePersonal;