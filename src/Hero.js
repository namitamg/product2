import React from 'react'
import {Grid , Container , Typography , Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
  icon : {
    marginRight : theme.spacing(2)
  },
  appBarBg : {
    backgroundColor : '#000'
  },
  heroContent : {
    backgroundColor : theme.palette.background.paper,
    padding : theme.spacing(8,0,6)
  },
  heroButtons : {
    marginTop : theme.spacing(4)
  },
  cardGrid : {
    paddingTop : theme.spacing(8),
    paddingBottom : theme.spacing(8)
  },
  card: {
    height : '100%',
    display : 'flex',
    flexDirection : 'column'
  },
  cardMedia:{
    paddingTop : '56.25%'
  },
  footer :{
    backgroundColor : theme.palette.background.paper, 
    padding : theme.spacing(6)
  }
}))
export default function Hero() {
    const classes = useStyles(); 
    return (
        <div>
            <div className={classes.heroContent}>
<Container maxWidth="sm">
    <Typography component="h1" variant="h2" align="center" color="textPrimary">
    Where to?  Start your next trip with airbnb
    </Typography>
    <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Explore and Enjoy the stay with airbnb 
    </Typography>
    <div className={classes.heroButtons}>
       <Grid container spacing={2}  justifyContent="center">
         
        </Grid>
    </div>
</Container>
</div>
        </div>
    )
}