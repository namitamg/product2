import React , {Fragment} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ShopIcon from '@material-ui/icons/Shop';
import { useHistory } from 'react-router-dom';


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

export default function Landing() {
  const classes = useStyles(); 
  const history = useHistory()

  const handleClick =()=>{
    return history.push('/')
  }
  
  return (
      <Fragment>
    {/* //    <CssBaseline/>
    //     <AppBar className={classes.appBarBg}> 
    //       <Toolbar>
    //         <ShopIcon className={classes.icon} />
    //         <Typography variant="h6" color="inherit" onClick={handleClick} >
    //             Cart 
    //         </Typography>
    //       </Toolbar>
    //     </AppBar> */}
        
      </Fragment>
    
  )
}