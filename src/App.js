import React from 'react';
import './App.css';

import Home from './Home'
 import Header from './Header'

import SearchPage from './SearchPage'

 import Hero from "./Hero"


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Explore from './components/Explore/Explore'

import Checkout from "./components/Login/Checkout"
import Pondicherry from "./components/Pondicherry"
import Manali from "./components/Manali"
import Goa from "./components/Goa"
import Kerala from "./components/Kerala"



  

 function App() {

  // const [auth , setAuth ] = useState(false); 
  return (
<>
    <Router>
      
      <Header />
      <Route exact path='/' component={Hero}/>
      
      
     <Route exact path="/" component={Explore} />
      <Switch>
      <Route exact path= "/hotel/checkout" component={Checkout}/>
        <Route path="/search">
          <SearchPage />
        </Route>

        <Route path="/pondicherry">
          <Pondicherry />
        </Route>
        <Route path="/goa">
          <Goa />
        </Route>
        <Route path="/manali">
          <Manali />
        </Route>

        <Route path="/kerala">
          <Kerala />
        </Route>

        <Route path="/">
          <Home />
        </Route> 
      

  </Switch>
      
     
    </ Router>
    
  </>

);
}

export default App;


















    