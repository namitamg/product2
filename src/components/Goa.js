import React from 'react';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardGroup} from "react-bootstrap";
import './Pondicherry.css'



// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
//   cardGrid : {
//     paddingTop : theme.spacing(8),
//     paddingBottom : theme.spacing(8)
//   },
// }));

export default function MediaCard() {
  // const classes = useStyles();

  return (


<CardGroup>
  <Card className="card1" >
    <Card.Img variant="top" src="https://a0.muscache.com/im/pictures/29cc0a21-4b94-41b5-a2e2-d4229307efb8.jpg?im_w=1200" />
    <Card.Body>
      <Card.Title >Gravityville-Heritage, Goa</Card.Title>
      <Card.Text>
      Entire bungalow  <br/><b>'Gravityville-Heritage'5 BHK home</b><br/>9 guests, · 4 bedrooms, <br/>· 4 beds, · 4 bathrooms
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to="/">BOOK NOW</Link>
    </Card.Footer>
  </Card>


  <Card className="card2">
    <Card.Img variant="top" src="https://a0.muscache.com/im/pictures/d505e1c0-3379-46f0-b3a4-517bc3f7d9f9.jpg?im_w=1200" />
    <Card.Body>
      <Card.Title>Villa Hugel,Goa</Card.Title>
      <Card.Text>
      Private room in villa<br/><b>'Villa Hugel'3 BHK home</b><br/>9 guests, · 3 bedrooms, <br/>· 3 beds, · 3 bathrooms
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to="/">BOOK NOW</Link>
    </Card.Footer>
  </Card>



  <Card className="card3">
    <Card.Img variant="top" src="https://a0.muscache.com/im/pictures/23a8f65e-7d36-4c63-bbb1-3a9f4700fac8.jpg?im_w=1200" />
    <Card.Body>
      <Card.Title>Duplex Sea view ,Goa</Card.Title>
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
      <Card.Title>Spacious B&B❤️ Balcony, Goa</Card.Title>
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
