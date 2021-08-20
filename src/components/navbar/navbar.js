import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//  import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
// import Modal from "react-responsive-modal";
//  import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import { Avatar } from "@material-ui/core";
import  "./navbar.css";
 import Signup from "../Signup/Signup"
 import Login from "../Login/Login"
import { Link } from "react-router-dom";



const navbar = () => {
    return (
        <div >
            <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">
        <img src="https://www.investmentclub360.com/wp-content/uploads/2019/04/1_BsKbDTA9ZUVroeJ7asId4Q.png"  alt="" width="200" height="90"></img>
    </Navbar.Brand>
    <Nav className="nav_link me-auto">
      <Nav.Link ><Link to='/'>Places to stay</Link></Nav.Link>
      <Nav.Link><Link to='/'>Experiences</Link></Nav.Link>
      <Nav.Link ><Link to='/'>Online experiences</Link></Nav.Link>

      {/* <div className='header__right'> */}
                <p>Become a host</p>
                <LanguageIcon />
               <Signup/>
               <Login/>
                {/* <Avatar/> */}
               
               
                
            {/* </div> */}
    </Nav>
    </Container>
  </Navbar>
  
  <div className='header__center'>
                {/* <input type="text" /> */}

                {/* <SearchIcon /> */}
            </div>
  
  
 
</>
        </div>

       
    )
}

export default navbar;
