import React, { Component } from 'react'
import { Row, Col } from "react-materialize";

export class BecomeAProvider extends Component {
  render() {
    return (
      <div>
          <h4 className="center-align"> Become a Vendor </h4>
        <Row>
        <form method="POST" action="/newProvider">
            <Col s={12}>
                <Row>
                    <Col s={6} className="input-field">
                        <p>Company Name</p>
                        <input name="companyName" id="textarea1" className="materialize-textarea" />
                
                    </Col>
                </Row>
                <Row>
                    <Col s={6}>
                        <p>Email</p>
                        <input name="companyEmail" id="textarea1" className="materialize-textarea" />
                    </Col>
                </Row>
                <Row>
                    <Col s={6}>
                        <p>Services Provided</p>
                        <input name="servicesProvided" id="textarea1" className="materialize-textarea" />
                        <button href="/newProvider" type="submit"> Submit Here </button>
                    </Col>
                </Row>
            </Col>
        </form> 
        </Row>
      </div>
    )
  }
}

export default BecomeAProvider
