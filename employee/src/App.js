import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from './Navbar';
import Client from './Client';
import Produit from './Product'
import Addclient from './Addemp'
import Editclient from './Editclient'

 

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar />
          <Switch>
            <Route path="/client" exact component={Client}></Route>
            <Route path="/produit" exact component={Produit}></Route>
            <Route path="/addclient" exact component={Addclient}></Route>
            <Route path="/editclient/:id" exact component={Editclient}></Route>
          </Switch>

        </Router>
        

      </div>
    )
  }
}
