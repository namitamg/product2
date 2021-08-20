import React from 'react'
import './Header.css'
//  import SearchIcon from "@material-ui/icons/Search";

import { Link } from "react-router-dom";
import Login from "./components/Login/Login"
import Signup from "./components/Signup/Signup"
// import SearchBar from './components/SearchBar/SearchBar';
import SearchBar from './components/SearchBar/SearchBar';
import CityData from './components/SearchBar/Data.json';

function Header() {
    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className="header__icon"
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt=""
                />
            </Link>
           
            {/* <div className='header__center'>
                <input type="text" />
                <SearchIcon />
                
            </div> */}
            {/* <SearchBar /> */}
            <SearchBar placeholder="Search" data={CityData}/>

            <div className='header__right'>
                
                
                <Signup/>
               <Login/>
               
            </div>
        </div>
    )
}

export default Header;