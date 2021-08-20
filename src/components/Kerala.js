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
      <Card.Title >Casa Meena - Sea view villa, Kerala</Card.Title>
      <Card.Text>
      Entire villa in Kerala<br/><b>'Casa Meena' 2BHK sea view villa</b> <br/>6 guests, · 2 bedrooms, <br/>· 4 beds, · 2 bathrooms
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to="/">BOOK NOW</Link>
    </Card.Footer>
  </Card>


  <Card className="card2">
    <Card.Img variant="top" src="https://a0.muscache.com/im/pictures/0075ef8a-413b-409a-9456-dc11530f756e.jpg?im_w=1200" />
    <Card.Body>
      <Card.Title>Windtreey 4BR, Kerala</Card.Title>
      <Card.Text>
       Room in residential home<br/><b>'Calanjali'2 BHK home</b><br/> 4 guests, · 2 bedroom, <br/>· 2 bed, · 2 private bathroom
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to="/">BOOK NOW</Link>
    </Card.Footer>
  </Card>



  <Card className="card3">
    <Card.Img variant="top" src="https://a0.muscache.com/im/pictures/c92a8ed3-1390-4d17-a66b-a4e88dca93be.jpg?im_w=1200" />
    <Card.Body>
      <Card.Title>La maison bleue Eco-conscious lodging, Kerala</Card.Title>
      <Card.Text>
      Entire villa for stay<br/><b>'Duplex Sea view'1 BHK home</b><br/> 4 guests, · 1 bedroom, <br/>· 1 bed, · 1 private bathroom
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to="/">BOOK NOW</Link>
    </Card.Footer>
  </Card>


<Card>
    <Card.Img variant="top" src="https://pix8.agoda.net/hotelImages/6125420/-1/eea1f4af2bca050465ab2e0fb42359ff.jpg?s=450x450" />
    <Card.Body>
      <Card.Title>Heaven Hill View</Card.Title>
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