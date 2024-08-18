import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';




import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Button } from 'react-bootstrap';

import Header from './Components/Header';


import img1 from './Assert/img1.jpeg';
import img2 from './Assert/img2.jpeg';
import img3 from './Assert/img3.jpg';
import img4 from './Assert/img4.jpg';
import img5 from './Assert/img5.jpg';
import img6 from './Assert/img6.jpeg';



function App() {
  return (
    <div>
    
      <Header />
      
      
      
      <div className="flexbox-container" >
      
        <h1 className="heading" style={{color:'#fff',backgroundColor:'red'}}>MarketPlace UI!</h1>
      </div>
      <h2><center>Advertisement List!</center></h2>
      
    
      


    <CardGroup style={{ marginBottom: '30px' }}>
    <Card > 
        <Card.Img variant="top" src={img1} style={{ height: '350px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>Car Model1</Card.Title>
          <Card.Text>
            <b>
            Luxuary High Performancevehicle
            <br></br>
            color:Metalic maroon
            <br></br>
            price:100000kr
            </b>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button>Details</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={img2} style={{ height: '350px', objectFit: 'cover' }}/>
        <Card.Body>
          <Card.Title>Car Model2</Card.Title>
          <Card.Text>
          <b>
            Luxuary sports vehicle
            <br></br>
            color:Crimson Red
            <br></br>
            price:670000kr
            </b>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button>Details</Button>
        </Card.Footer>
      </Card>
      <Card >
        <Card.Img variant="top" src={img3} style={{ height: '350px', objectFit: 'cover' }}/>
        <Card.Body>
          <Card.Title>Car Model3</Card.Title>
          <Card.Text>
          <b>
            Fancy Luxuary vehicle
            <br></br>
            color:Black and Blue
            <br></br>
            price:900000kr
            </b>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button>Details</Button>
        </Card.Footer>
      </Card>
    </CardGroup>
    
  

<CardGroup>
<Card>
  <Card.Img variant="top" src={img4} style={{ height: '350px', objectFit: 'cover' }}/>
  <Card.Body>
    <Card.Title>Car Model4</Card.Title>
    <Card.Text>
    <b>
            Cool High Performancevehicle
            <br></br>
            color:Metalic ash
            <br></br>
            price:300000kr
            </b>
      
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <Button>Details</Button>
  </Card.Footer>
</Card>
<Card>
  <Card.Img variant="top" src={img5} style={{ height: '350px', objectFit: 'cover' }}/>
  <Card.Body>
    <Card.Title>Car Model5</Card.Title>
    <Card.Text>
    <b>
            Luxuary High Performancevehicle
            <br></br>
            color:Metalicyellow
            <br></br>
            price:890000kr
            </b>
    </Card.Text>
  </Card.Body>
  <Card.Footer>
  <Button>Details</Button>
  </Card.Footer>
</Card>
<Card>
  <Card.Img variant="top" src={img6} style={{ height: '350px', objectFit: 'cover' }} />
  <Card.Body>
    <Card.Title>Car Model6</Card.Title>
    <Card.Text>
    <b>
             Trendy High Performancevehicle
            <br></br>
            color:Metalic Brown
            <br></br>
            price:450000kr
            </b>
    </Card.Text>
  </Card.Body>
  <Card.Footer>
  <Button>Details</Button>
  </Card.Footer>
</Card>
</CardGroup>
</div>

);
}


    
    

    
    
    
    


  
  


export default App;

