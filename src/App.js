import React from 'react';
import './App.css';

import Home from './Home'
 import Header from './Header'

import SearchPage from './SearchPage'

 import Hero from "./Hero"


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pondicherry from './components/places/Pondicherry';
import Explore from './components/Explore/Explore'
import Goa from './components/places/Goa';
import Manali from './components/places/Manali';
import Kerala from './components/places/Kerala'
import Checkout from "./components/Login/Checkout"



  

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


















    