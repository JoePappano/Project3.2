import React, { Component } from "react";
import axios from "axios"

export class ListingsTable extends Component {

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
    console.log("props", this.state.listing)
    return (
      <div>

        
          {/* <form action="/queryListings" method="GET" class="col s12">
          
            <div class="row">
                <div class="input-field col s6">
                    <textarea name="city" id="textarea1" class="materialize-textarea" />
                    
                    <label for="textarea1">City</label>
                </div>
            </div>
            
            <button href="/queryListings" type="submit"> Search Gig By City </button>
          </form> */}



        <table>
          <tr>
            <th> User </th>
            <th> City </th>
            <th> Project Type </th>
            <th> Description </th>
            <th> Phone </th>
          </tr>
          {this.state.listing.map((listing) => {
             return <tr>
                  <td> { listing.User } </td>
                  <td> { listing.City } </td>
                  <td> { listing.ProjectType }</td>
                  <td> { listing.DescriptionOfWorkToBeDone }</td>
                  <td> { listing.Phone } </td>
              </tr>
          })}
          
        </table>
      </div>
    );
  }
}

export default ListingsTable;
