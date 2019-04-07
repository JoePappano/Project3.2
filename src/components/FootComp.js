import React, { Component } from "react";
import { Footer, Row, Col } from "react-materialize"

export class FootComp extends Component {
  render() {
    return (
        <footer className="page-footer teal">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Company Bio</h5>
              <p className="grey-text text-lighten-4">We are a team of developers working to create a platform for service providers to bid on home projects.</p>
    
    
            </div>
            
            <div className="col l3 s12">
              <h5 className="white-text">Connect</h5>
              <ul>
                <li><a className="white-text" href="#!">Jeff</a></li>
                <li><a className="white-text" href="#!">Joe</a></li>
                <li><a className="white-text" href="#!">Troy</a></li>
                <li><a className="white-text" href="#!">Kate</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
          Made by <p className="brown-text text-lighten-3">Kate, Jeff, Troy, and Joe</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default FootComp;


