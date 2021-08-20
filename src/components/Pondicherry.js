// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import { CardActionArea ,Card} from '@material-ui/core';
// // import Card from '../Card';


// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });

// export default function MediaCard() {
//   const classes = useStyles();

//   return (
//     <Card className={classes.root}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image="/static/images/cards/contemplative-reptile.jpg"
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//             across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }

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
    <Card.Img variant="top" src="https://a0.muscache.com/im/pictures/c92a8ed3-1390-4d17-a66b-a4e88dca93be.jpg?im_w=1200" />
    <Card.Body>
      <Card.Title >La maison bleue Eco-conscious lodging, Pondicherry</Card.Title>
      <Card.Text>
      Private room in bungalow<br/><b>'Casa Ahau'1 BHK Bungalow</b> <br/>3 guests, · 1 bedroom, <br/> 2 beds, · 1 shared bathroom
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to="/hotel/checkout">BOOK NOW</Link>
    </Card.Footer>
  </Card>


  <Card className="card2">
    <Card.Img variant="top" src="https://a0.muscache.com/im/pictures/0075ef8a-413b-409a-9456-dc11530f756e.jpg?im_w=1200" />
    <Card.Body>
      <Card.Title>Calanjali (Ensuite), Pondicherry</Card.Title>
      <Card.Text>
      Private room in residential home<br/><b>'Calanjali'1 BHK home</b><br/> 3 guests, · 1 bedroom, <br/>· 1 bed, · 1 private bathroom
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to="/hotel/checkout">BOOK NOW</Link>
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
    <Link to="/hotel/checkout">BOOK NOW</Link>
    </Card.Footer>
  </Card>


<Card>
    <Card.Img variant="top" src="https://a0.muscache.com/im/pictures/0671ce8e-f985-4bba-b061-5f16783d6e79.jpg?im_w=1200" />
    <Card.Body>
      <Card.Title>Stumpfields,Pondicherry</Card.Title>
      <Card.Text>
      Entire residential home <br/><b>'Stumpfields'5 BHK home</b><br/>8 guests, · 5 bedrooms, <br/>· 6 beds, · 3 bathrooms
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to="/hotely/checkout">BOOK NOW</Link>
    </Card.Footer>
  </Card>



</CardGroup>





  );
}
