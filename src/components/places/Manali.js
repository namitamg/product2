import React from 'react';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardGroup} from "react-bootstrap";
import './Pondicherry.css'




export default function MediaCard() {
  
  return (


<CardGroup>
  <Card className="card1" >
    <Card.Img variant="top" src="https://a0.muscache.com/im/pictures/d505e1c0-3379-46f0-b3a4-517bc3f7d9f9.jpg?im_w=1200" />
    <Card.Body>
      <Card.Title >Vigel villa, Manali</Card.Title>
      <Card.Text>
      Private room in bungalow<br/><b>'Casa Ahau'1 BHK Bungalow</b> <br/>3 guests, · 1 bedroom, <br/> 2 beds, · 1 shared bathroom
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to="/">BOOK NOW</Link>
    </Card.Footer>
  </Card>


  <Card className="card2">
    <Card.Img variant="top" src="https://pix8.agoda.net/hotelImages/6125420/-1/eea1f4af2bca050465ab2e0fb42359ff.jpg?s=450x450" />
    <Card.Body>
      <Card.Title>Dune Eco hotels, Manali</Card.Title>
      <Card.Text>
      Entire rental unit in Manali <br/><b>'The Dune Eco' 2BHK in Heritage town </b><br/> 4 guests, · 2 bedrooms,<br/> · 2 beds, · 2 bathrooms
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to="/">BOOK NOW</Link>
    </Card.Footer>
  </Card>



  <Card className="card3">
    <Card.Img variant="top" src="https://a0.muscache.com/im/pictures/23a8f65e-7d36-4c63-bbb1-3a9f4700fac8.jpg?im_w=1200" />
    <Card.Body>
      <Card.Title>Duplex Sea view Studio Room,Pondicherry</Card.Title>
      <Card.Text>
      Private room in residential home<br/><b>'Duplex Sea view'1 BHK home</b><br/> 4 guests, · 1 bedroom, <br/>· 1 bed, · 1 private bathroom
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to="/">BOOK NOW</Link>
    </Card.Footer>
  </Card>


<Card>
    <Card.Img variant="top" src="https://a0.muscache.com/im/pictures/0671ce8e-f985-4bba-b061-5f16783d6e79.jpg?im_w=1200" />
    <Card.Body>
      <Card.Title>Gravityville-Heritage, Manali</Card.Title>
      <Card.Text>
      Entire residential home <br/><b>'Stumpfields'5 BHK home</b><br/>8 guests, · 5 bedrooms, <br/>· 6 beds, · 3 bathrooms
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to="/">BOOK NOW</Link>
    </Card.Footer>
  </Card>



</CardGroup>





  );
}