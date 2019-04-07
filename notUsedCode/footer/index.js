import React from "react"

function Footer(){
    return(
      <Row className="page-footer teal">
      <Col xl={6}>
        
            <h5>Company Bio</h5>
            <p className="grey-text text-lighten-4">We are a team of developers working to create a platform for service providers to bid on home projects.</p>
        
      </Col>
      
      <Col xl={6}>
            <h5>Connect</h5>
            <ul>
                <li><a className="white-text" href="#!">Jeff</a></li>
                <li><a className="white-text" href="#!">Joe</a></li>
                <li><a className="white-text" href="#!">Troy</a></li>
                <li><a className="white-text" href="#!">Kate</a></li>
            </ul>
      </Col>
      </Row>
      <Row className="page-footer teal">
      <p> @ 2019 Kate, Jeff, Troy, and Joe</p>
      </Row>
    )
}
export default Footer