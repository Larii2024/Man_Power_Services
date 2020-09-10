import React from 'react';
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import './assets/css/bootstrap.min.css'
import './assets/css/agency.min.css'
import {HashRouter,Redirect,Switch,Route,Link} from "react-router-dom";
import './App.css';
import Userform from './components/userform';
import Nurseform from './components/nurseform';
import Candiform from './components/candiform';
import Sf from './components/serviceform';
import unknownwoman from './assets/img/unknownwoman.png';
import unknownman from './assets/img/unknownman.jpg';
import header_bg from './assets/img/header-bg.jpg';
import bg1 from './assets/img/attbg.png';
import c1 from './assets/img/5.jpg';
import c4 from './assets/img/11.jpg';
import c2 from './assets/img/12.jpg';
import c3 from './assets/img/7.jpg';
import logo from './assets/img/logo.jpeg';
import Carousel from 'react-bootstrap/Carousel';
import { Helmet } from "react-helmet";

export default function App(){ 
	var logoStyle = {
  width: "55px",
  height: "55px",
  borderRadius:"30px"
};
  return (
    <HashRouter>
    <div className="App">
  	<Helmet>
     <title>Man Power Services</title>
    </Helmet>
    <nav class="navbar navbar-expand-lg navbar-dark" id="mainNav">
	  	<a class="navbar-brand text-white justify-content-center" href="#"><img src={logo} alt="logo" style={logoStyle}/><span>{' '}</span>ANTHROPIC</a>
	  	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  	</button>
  		<div class="collapse navbar-collapse" id="navbarResponsive">
    	<ul class="navbar-nav text-uppercase ml-auto">
    	<li class="nav-item"><a class="nav-link js-scroll-trigger" href="/Man_Power_Services">Home</a></li>
        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About Us</a></li>
        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#portfolio">services</a></li>
        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#services">other services</a></li>
        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#team">Team</a></li>
        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
   		</ul>
  		</div>
	</nav>
         <Switch>
          <Route exact path='/Man_Power_Services' component={() => <Hom/>} />
              <Route  path='/userform' component={Userform} />
              <Route path="/candidateform" component={Candiform} />
              <Route  path="/nurseform" component={Nurseform}/>
              <Route path="/serviceform" component={Sf}/>
              <Redirect to="/Man_Power_Services" />
         </Switch>
         <link rel="stylesheet" href= "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
         <footer class="footer py-4 bg-light">
            <div class="container">
                <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li ><a href="/Man_Power_Services">Home</a></li>
        				<li ><a href="#about">About Us</a></li>
        				<li ><a  href="#portfolio">services</a></li>
        				<li ><a  href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
                      Hanuman Nagar Circle, Doordarshan Nagar, <br/>
                      Sadashiv Nagar, <br/>
                      Belgaum,<br/>
                     Karnataka 590019<br />
                      <i className="fa fa-phone fa-lg"></i>: 9945950646<br />
                      <i className="fa fa-fax fa-lg"></i>: 8088268634<br />
                      <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:anthropic78@gmail.com">
                         anthropic78@gmail.com</a>
                    </address>
                </div>
                 <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus fa-lg"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook fa-lg"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin fa-lg"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter fa-lg"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube fa-lg"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o fa-lg"></i></a>
                    </div>
                </div>
            </div>
            </div>
        </footer>
        </div>
        </HashRouter>
        
  );
  }

function Hom(){
var sectionStyle = {
  width: "100%",
  height: "auto",
  backgroundImage: `url(${header_bg})`
};
var sectionStyle2 = {
  width: "100%",
  height: "auto",
  backgroundImage: `url(${bg1})`
};
var cStyle = {
  width: "100%",
  height: "650px"
};

  return(   
        <div> 
         <link rel="stylesheet" href= "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <header>
            <div class="container">
                <div ><h1>Welcome To man power detais!</h1></div>
               <div><h3>It's Nice To Meet You</h3></div>
               {/* <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>*/}
            </div>
         </header>
        <section class="page-section " id="portfolio" style={ sectionStyle }>
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase text-white">services</h2>
                    <h3 class="section-subheading text-muted">............</h3>
                </div>
                <div class="row d-flex justify-content-center flex-wrap">
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="portfolio-item">
                            <a class="portfolio-link"  href="/Man_Power_Services/#/userform">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fa fa-plus fa-1x"></i></div>
                                </div>
                                <img class="img-fluid" src="assets/img/portfolio/01-thumbnail.jpg" alt="" />
                            </a>
                            <div class="portfolio-caption">
                                <div><h3 class="portfolio-caption-heading"><a href="/Man_Power_Services/#/userform">Are you searching for a job?</a></h3></div>
                               {/* <div class="portfolio-caption-subheading text-muted">sub heading of cand</div>*/}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="portfolio-item">
                            <a class="portfolio-link" href="/Man_Power_Services/#/candidateform">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fa fa-plus fa-1x"></i></div>
                                </div>
                                <img class="img-fluid" src="assets/img/portfolio/02-thumbnail.jpg" alt="" />
                            </a>
                            <div class="portfolio-caption">
                                <div><h3 class="portfolio-caption-heading"><a href="/Man_Power_Services/#/candidateform">Are you in search of candidate?</a></h3></div>
                                {/* <div class="portfolio-caption-subheading text-muted">sub head</div>*/}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="portfolio-item">
                            <a class="portfolio-link" href="/Man_Power_Services/#/nurseform">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fa fa-plus fa-1x"></i></div>
                                </div>
                                <img class="img-fluid" src="assets/img/portfolio/03-thumbnail.jpg" alt="" />
                            </a>
                            <div class="portfolio-caption">
                                <div><h3 class="portfolio-caption-heading"><a href="/Man_Power_Services/#/nurseform">Are you in search of a Nurse/baby sitter?</a></h3></div>
                            
                            </div>
                        </div>
                    </div>
                   <div class="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                        <div class="portfolio-item">
                            <a class="portfolio-link" href="/Man_Power_Services/#/serviceform">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fa fa-plus fa-1x"></i></div>
                                </div>
                                <img class="img-fluid" src="assets/img/portfolio/05-thumbnail.jpg" alt="" />
                            </a>
                            <div class="portfolio-caption">
                            <div><h3 class="portfolio-caption-heading"><a href="/Man_Power_Services/#/serviceform"> Other services</a> </h3></div>
                            
                            </div>
                        </div>
</div>
                </div>
            </div>
        </section>
 
 <section class="page-section" >
 <div class="container">
  <Carousel >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={c1}
      alt="First slide"
      style={ cStyle }
    />
    <Carousel.Caption>
      <h4>.......</h4>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={c2}
      alt="First slide"
      style={ cStyle }
    />
    <Carousel.Caption>
      <h4>........</h4>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={c3}
      alt="First slide"
      style={ cStyle }
    />
    <Carousel.Caption>
      <h4>..........</h4>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={c4}
      alt="Third slide"
      style={ cStyle }
    />
    <Carousel.Caption>
      <h4 className="text-black" >.........</h4>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
</section>


        <section class="page-section" id="services" >
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Other Services</h2>
                    <h3 class="section-subheading text-muted">At anthropic softwares</h3>
                </div>
                <div class="row text-center">
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fa fa-circle fa-stack-2x text-primary"></i>
                            <i class="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">E-Commerce</h4>
                        <p class="text-muted"></p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fa fa-circle fa-stack-2x text-primary"></i>
                            <i class="fa fa-laptop fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">TRUE GUIDE PAPERLESS ACADEMIC SYSTEM</h4>
                        <p class="text-muted"></p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fa fa-circle fa-stack-2x text-primary"></i>
                            <i class="fa fa-lock fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">Web Security</h4>
                        <p class="text-muted"></p>
                    </div>
                </div>
            </div>
        </section>
        
        
        
        <section class="page-section text-white" id="about" style={ sectionStyle2 }>
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">About</h2>
                    <h3 class="section-subheading">Anthropic Softwares pvt ltd is product based growing organization with average experience of 10 years. Expertise into core computing such as cloud computing high speed computing networking telecom security applications engineering into technologies like Android, Java, Data base Anthropic has strong technology background where founders of Anthropic come from world leaders such as Nokia, Alcatel-Lucent, intel, Bell labs, GSlabs, Qlogic, Symentric etc
Anthropic Softwares pvt ltd owns a platform which help us to build very stable product which as distributed to clients in a client server mode in short time stable and RICH product.</h3>
                </div>
                <ul class="timeline">
                    <li>
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="" /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>2009-2011</h4>
                                <h4 class="subheading">Our Humble Beginnings</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted"></p></div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="" /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>March 2011</h4>
                                <h4 class="subheading">An Agency is Born</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted"></p></div>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="" /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>December 2012</h4>
                                <h4 class="subheading">Transition to Full Service</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted"></p></div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt="" /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>July 2014</h4>
                                <h4 class="subheading">Phase Two Expansion</h4>
                            </div>
                        
                        </div>
                        <br />
                    </li>
        
                </ul>
            </div>
            <h4>
                            "If debugging is the process of removing software bugs
                                <br />
                                ,then programming must be the process of putting them in. "
                                <br />
                                -ANTHROPIC
                            </h4>
        </section>
        
        <section class="page-section bg-light" id="team">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 class="section-subheading text-muted">.......</h3>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src={unknownman} alt="" />
                            <h4>......</h4>
                            <p class="text-muted">Lead Designer</p>
                            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fa fa-twitter"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fa fa-facebook-f"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src={unknownwoman} alt="" />
                            <h4>......</h4>
                            <p class="text-muted">Lead Marketer</p>
                            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fa fa-twitter"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fa fa-facebook-f"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src={unknownwoman} alt="" />
                            <h4>.......</h4>
                            <p class="text-muted">Lead Developer</p>
                            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fa fa-twitter"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fa fa-facebook-f"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">......</p></div>
                </div>
            </div>
        </section>
        
        <div class="py-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img class="img-fluid d-block mx-auto" src="assets/img/logos/envato.jpg" alt="" /></a>
                    </div>
                    <div class="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img class="img-fluid d-block mx-auto" src="assets/img/logos/designmodo.jpg" alt="" /></a>
                    </div>
                    <div class="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img class="img-fluid d-block mx-auto" src="assets/img/logos/themeforest.jpg" alt="" /></a>
                    </div>
                    <div class="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img class="img-fluid d-block mx-auto" src="assets/img/logos/creative-market.jpg" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
        
        <section class="page-section" id="contact">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Contact Us</h2>
                    <h3 class="section-subheading text-muted">fill in the details</h3>
                </div>
                <form id="contactForm" name="sentMessage" novalidate="novalidate">
                    <div class="row align-items-stretch mb-5">
                        <div class="col-md-6">
                            <div class="form-group">
                                <input class="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="form-group">
                                <input class="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="form-group mb-md-0">
                                <input class="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." />
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group form-group-textarea mb-md-0">
                                <textarea class="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                    </div>
                    <div class="text-center">
                        <button class="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Send Message</button>
                    </div>
                </form>
            </div>
        </section>
        <div>
     <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </div>
    </div>
    

  );
}


