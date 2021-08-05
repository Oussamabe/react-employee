import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link className="nav-link active" to="/client">
                  clients
                </Link>
              </li>
              <li class="nav-item active">
                <Link className="nav-link active" to="/produit">
                  produit
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link active" to="/addclient">
                  add client
                </Link>
              </li>
              
            
              
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
