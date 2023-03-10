import React from 'react';
import "../../styles/aboutUs.css"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Figure from 'react-bootstrap/Figure';
import LMT from '../../img/Loretta_Mayumi_Thompson_photo.jpg';
import KM from '../../img/Kriss_Morejon_and_wife.jpg';
import AL from '../../img/Albert_Lazo.jpg';
import Geeks from '../../img/4geeks_logo.png';


function AboutUs() {
  return (
    <div className="AboutUs">
      <h1>About Us</h1>

      <div className="MissionStatementFigure">
        <Figure.Image     
          src="https://images.unsplash.com/photo-1531498860502-7c67cf02f657?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nJTIwYm9vdGNhbXB8ZW58MHx8MHx8&auto=format&fit=crop&w=1600&q=60/171x180"
        />
         
        <Figure.Caption>
          <h1>It all started because we were going through bootcamp, and looking for good jobs in the area that we wouldn't have to physically relocate to....</h1>
          <p> Our mission at SouthFLDevJobs.com is to provide job seekers and employers in the tech industry in 
            South Florida with a user-friendly and comprehensive platform for job 
            listings. We understand the challenges faced by job seekers in the region. 
            While in coding bootcamp, we struggled to find relevant job opportunities that would 
            not require us physically relocating. Our web app is designed to streamline the job search process and provide 
            accurate and specific job listings in Miami-Dade, Broward, and Palm Beach 
            counties. We are committed to supporting the growth of the tech industry 
            in South Florida by connecting talented individuals with exciting career 
            opportunities and helping businesses find the right talent to thrive and succeed.</p>
        </Figure.Caption>
      </div>

      
      <h1>Meet our team</h1>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={AL} />
          <Card.Body>
            <Card.Title>Albert Lazo</Card.Title>
            <Card.Text>
              A short bio goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitasse
              platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper
              dignissim. Nisi lacus sed viverra tellus in. Gravida arcu ac tortor.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <ButtonGroup aria-label="SocialMedia" size="lg" className="mb-2">

                <Button variant="backGroundColor= #8e793e">
                    <a href='https://twitter.com/betolix' target='_blank'>
                      <i class="fa-brands fa-twitter"/></a>
                </Button>
                
                <Button variant="backGroundColor= #8e793e">
                    <a href='https://linkedin.com/in/alberto-lazo' target='_blank'>
                      <i class="fa-brands fa-linkedin"/></a>
                </Button>
                
                <Button variant="backGroundColor= #8e793e">
                    <a href='https://github.com/betolix' target='_blank'>
                      <i class="fa-brands fa-github"/></a>
                </Button>

                <Button variant="backGroundColor= #8e793e">
                    <a href='https://facebook.com/Vodevil82' target='_blank'>
                      <i class="fa-brands fa-facebook"/></a>
                </Button>


                <Button variant="backGroundColor= #8e793e"><i class="fa-brands fa-google"></i></Button>
              </ButtonGroup>

            </small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={KM}/>
          <Card.Body>
            <Card.Title>Kriss Morejon</Card.Title>
            <Card.Text>
              An avid gamer and proud family man, Kriss Morejon etc short bio goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. {' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <ButtonGroup aria-label="SocialMedia" size="lg" className="mb-2">
                <Button variant="backGroundColor= #8e793e">
                  <a href='https://www.linkedin.com/in/christopher-morejon-067ab7254/' target='_blank'>
                  <i class="fa-brands fa-linkedin"/></a>
                </Button>

                <Button variant="backGroundColor= #8e793e">
                    <a href='https://github.com/Kriss1205' target='_blank'>
                      <i class="fa-brands fa-github"/></a>
                </Button>
              
                {/* <Button variant="backGroundColor= #8e793e">
                  <a href='mailto:ChristopherMorejon17@gmail.com?body=My custom mail body' target='_blank'>
                  <i class="fa-brands fa-google"/></a>
                </Button> */}
                       
              </ButtonGroup>
            </small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={LMT}/>
          <Card.Body>
            <Card.Title>Loretta Mayumi Thompson</Card.Title>
            <Card.Text>
              never thought a career in the tech industry would be open to her, but 
              thanks United Way Miami Workforce Project and 4Geeks Academy for the 
              opportunity to participate in this coding bootcamp. She hopes etc etc etc 
               short bio goes here. 
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <ButtonGroup aria-label="SocialMedia" size="lg" className="mb-2">
                
                <Button variant="backGroundColor= #8e793e">
                    <a href='https://www.linkedin.com/in/loretta-mayumi-thompson-293773256/' target='_blank'>
                      <i class="fa-brands fa-linkedin"/></a>
                </Button>

                <Button variant="backGroundColor= #8e793e">
                    <a href='https://github.com/TheRhettThompson' target='_blank'>
                      <i class="fa-brands fa-github"/></a>
                </Button>
                
                <Button variant="backGroundColor= #8e793e"><i class="fa-brands fa-google"></i></Button>

              </ButtonGroup>
            </small>
          </Card.Footer>
        </Card>
      </CardGroup>

      <br>
      </br>
      
      <Card>
        <Card.Body>
          <Card.Text>
            <h1>Something interesting here</h1>
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src="https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fFdoZXJlJTIwYXJlJTIwdGhlJTIwam9ic3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1600&q=60/100px180" />
      </Card>

      <br/>

      <Figure>
        <Figure.Image variant="top" src={Geeks} />
        <Figure.Caption>
          Thank you, 4Geeks Academy! more text here 
        </Figure.Caption>
      </Figure>

    </div>

    



  )
}

export default AboutUs

