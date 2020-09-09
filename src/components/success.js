import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {Container,Button} from 'reactstrap';
import RaisedButton from 'material-ui/RaisedButton';
 import{ Link} from "react-router-dom";

export class Success extends Component{
   continue = e => {
       e.preventDefault();
       this.props.nextStep();
      }

      back = e => {
        e.preventDefault();
        this.props.prevStep();
       }
    render(){
        return(
          
  
                    <Container className="mt-5">
                    <h1 style={styles.button}>Thank you for the submission</h1>
                    <h4 style={styles.button}>You will get an email for further information after clicking the confirm submission button.</h4>
                    <hr/>
                    <Button 
                        style={styles.button}
                        onClick={this.back}>Edit Submission</Button> <br/> 
                     <Button type="submit" className="bg-success"
                    style={styles.button}
                    href="/">Confirm Submision</Button>
                    </Container>
                
            
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


export default Success;