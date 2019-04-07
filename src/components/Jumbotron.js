import React, { Component } from 'react'
import { Carousel } from  "react-materialize";

export class Jumbotron extends Component {
  render() {
    return (
        <div className="homepage-container">
        <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
          <div className="container">
            
            
            <div className="row center">
              <h5 className="header col s12 light">Get your project done today!</h5>
            </div>
            
    
          </div>
        </div>
        <div className="parallax"><img src="../../parallax-template/background1.jpg" alt="Unsplashed background img 1"/></div>
      </div>
    
    
      <div className="container">
        <div className="section">
    

          
          <div className="row">
            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center brown-text"><i className="material-icons">lock_outline</i></h2>
                <h5 className="center">Locksmith</h5>
    
                 </div>
            </div>
    
            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center brown-text"><i className="material-icons">color_lens</i></h2>
                <h5 className="center">Painting</h5>
    
                   </div>
            </div>
    
            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center brown-text"><i className="material-icons">kitchen</i></h2>
                <h5 className="center">Kitchen Repairs</h5>
    
               </div>
            </div>
            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center brown-text"><i className="material-icons">settings_input_component</i></h2>
                <h5 className="center">Electrician</h5>
    
                 </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center brown-text"><i className="material-icons">spa</i></h2>
                <h5 className="center">Gardening</h5>
    
                 </div>
            </div>
            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center brown-text"><i className="material-icons">store</i></h2>
                <h5 className="center">Roofing</h5>
    
                 </div>
            </div>
          </div>
    
        </div>
      </div>
      <div className="row center">
        <a className="waves-effect waves-light btn modal-trigger" href="/createUser">Get Started!</a>
        {/* <Modal/> */}
      </div>
      
    
      <div className="parallax-container valign-wrapper">
        <div className="section no-pad-bot">
          <div className="container">
            <div className="row center">
              <h5 className="header col s12 light"> </h5>
            </div>
          </div>
        </div>
        <div className="parallax"><img src="../../parallax-template/background2.jpg" alt="Unsplashed background img 2"/></div>
      </div>
    
      <div className="container">
        <div className="section">
    
          <div className="row">
            <div className="col s12 center">
              <h3><i className="mdi-content-send brown-text"></i></h3>
              <h4>Get started today!</h4>
              <p className="left-align light"></p>
            </div>
          </div>
    
        </div>
      </div>
    
    
      <div className="parallax-container valign-wrapper">
        <div className="section no-pad-bot">
          <div className="container">
            <div className="row center">
              <h5 className="header col s12 light" alt="visual"> </h5>
            </div>
          </div>
        </div>
        <div className="parallax"><img src="../../background3.jpg" alt="Unsplashed background img 3"/></div>
      </div>
      </div>
    )
  }
}

export default Jumbotron
