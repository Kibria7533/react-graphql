import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class Navber extends React.Component {
    render() { 
        return  <Router> <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link className="nav-link active" exact to="/">Home</Link>
              </li>
              <li class="nav-item">
              <Link className="nav-link active" exact to="/form">Form</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </Router>;
    }
}
 
export default Navber;