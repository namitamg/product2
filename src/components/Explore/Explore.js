import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'
import {Grid } from '@material-ui/core'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardGroup} from "react-bootstrap";
import "./Explore.css"


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
    <Card.Img variant="top" src="https://static.toiimg.com/thumb/49551643/Weekend-trips-from-Pondicherry.jpg?width=1200&height=900" />
    <Card.Body>
      <Card.Title>Pondicherry</Card.Title>
      <Card.Text>
        Weekend trips and getaways
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to="/pondicherry" className="">EXPLORE</Link>
    </Card.Footer>
  </Card>


  <Card className="card2">
    <Card.Img variant="top" src="https://imgk.timesnownews.com/story/Goa_beach_istock_1200.jpg?tr=w-1200,h-900" />
    <Card.Body>
      <Card.Title>Goa</Card.Title>
      <Card.Text>
       Places to visit!
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to="/goa">EXPLORE</Link>
    </Card.Footer>
  </Card>



  <Card className="card3">
    <Card.Img variant="top" src="https://static.toiimg.com/thumb/msid-35951814,width=1200,height=900/35951814.jpg" />
    <Card.Body>
      <Card.Title>Manali</Card.Title>
      <Card.Text>
      Mountain views
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to="/manali">EXPLORE</Link>
    </Card.Footer>
  </Card>


<Card className="card4">
    <Card.Img variant="top" src="https://static.toiimg.com/thumb/76405061/kerala.jpg?width=1200&height=900" />
    <Card.Body>
      <Card.Title>Kerala</Card.Title>
      <Card.Text>
        Beach waters stay
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to="/kerala">EXPLORE</Link>
    </Card.Footer>
  </Card>

</CardGroup>




  );
}