import React, { Component } from 'react';
import { Row, Col} from "react-materialize";
import axios from "axios"
import ListingsTable from "./ListingsTable";

export class CreateListing extends Component {


  state = {
    listing: []
  }

  
componentDidMount() {
  this.loadListing();
}

 loadListing = (e) => {
        console.log("jdafkl;djska;fjda")
        axios.get("/all").then((res) => {
          this.setState({ listing: res.data})
          console.log("res.data", res.data)
        })
 }

  render() {
    console.log("listing", this.state.listing)
    // this.loadListing();
    return (
      <div>
        <Row>
        <form method="POST" action="/newListing">
            <Col s={12}>
                <Row>
                    <Col s={6} className="input-field">
                        <p> Contact Name </p>
                        <input name="userName" id="textarea1" className="materialize-textarea" />
                
                    </Col>
                </Row>
                <Row>
                    <Col s={6} className="input-field">
                        <p> City </p>
                        <input name="city" id="textarea1" className="materialize-textarea" />
                
                    </Col>
                </Row>
                <Row>
                    <Col s={6} className="input-field">
                        <p>Project Type</p>
                        <input name="projectType" id="textarea1" className="materialize-textarea" />
                
                    </Col>
                </Row>
                <Row>
                    <Col s={6}>
                        <p>Description of Work</p>
                        <input name="workDescription" id="textarea1" className="materialize-textarea" />
                    </Col>
                </Row>
                <Row>
                    <Col s={6} className="input-field">
                        <p> Phone </p>
                        <input name="phone" id="textarea1" className="materialize-textarea" />

                    </Col>
                </Row>
                <button href="/newListing" type="submit"> Submit Here </button>
            </Col>
            
        </form> 
        </Row>
        
      {/* <ListingsTable listings={this.state.listing}/> */}
      </div>
    )
  }
}

export default CreateListing
