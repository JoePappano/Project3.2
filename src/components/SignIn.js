import React, { Component } from "react";
import Navigate from "./Navigate";
import { TextInput } from "react-materialize";

export class SignIn extends Component {
  render() {
    return (
      <div>
        <h4 className="center-align"> Sign In and Create A Listing </h4>
        <div class="row">
          <form action="/login" method="POST" class="col s12">
            <div class="row">
                <div class="input-field col s6">
                    <input placeholder="Email" name="email" id="textarea1" class="materialize-textarea" />
                    {/* <label for="textarea1">Email</label> */}
                </div>
            </div>
            <div className="row">
                <div class="input-field col s6">
                    <input placeholder="Password" name="password" type="password" id="textarea1" class="materialize-textarea" />
                    {/* <label for="textarea1">Password</label> */}
                </div>
            </div>
            
              <button href="/login" type="submit"> Sign In </button>
            
          </form>
          
          <p className="center-align"> Don't have an account? Click <a href="/createUser">Here</a></p>
        </div>
      </div>
    );
  }
}

export default SignIn;
