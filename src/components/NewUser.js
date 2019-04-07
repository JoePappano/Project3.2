import React, { Component } from 'react'
import axios from "axios";

export class NewUser extends Component {

    state = {
        errors: [],
        name: "",
        email: "",
        password: "",
        password2: ""
    }

    // componentDidMount() {
    //     axios.post("/newUser")
    //         .then(console.info)
    //         .catch(console.log);
    //         // .then((errors) => this.setState({
    //         //     errors: errors
    //         // }));
    // }

    // submit(event) {
    //     event.preventDefault();
    //     axios.post("/newUser",
    //     {
    //         name: this.state.name,
    //         email: this.state.email,
    //         password: this.state.password,
    //         password2: this.state.password2
    //     })
    //         .then(() => console.log("success"))
    //         .catch((error) => {
    //             this.setState({errors: error.response.data.errors});
    //         });
    // }

    // handleChange(event) {
    //     this.setState({[event.target.name]: event.target.value});
    // }


    // componentDidMount() {
    //     this.loadErrors();
    //   }
      
    //    loadListing = (e) => {
    //           console.log("jdafkl;djska;fjda")
    //           axios.post("/newUser").then((res) => {
    //             this.setState({ listing: res.data})
    //             console.log("res.data", res.data)
    //           })
    //    }

    // axios.post("/newUser", function(req, res) {
    //     let errors = [];
        
    //     //Check required fields
    //     if (!req.body.name || !req.body.email || !req.body.password || !req.body.password2) {
    //       errors.push({ msg: "Please fill in all fields" });
    //     }
    
    //     //check if passwords match
    //     if (req.body.password !== req.body.password2) {
    //       errors.push({ msg: "Passwords do not match" })
    //     }
    
    //     //check password length
    //     if (req.body.password.length < 6) {
    //       errors.push({ msg: "Password must be at least 6 characters" })
    //     }
    
    //     if (errors.length > 0) {
    //       // res.render("createUser"
    //       // , {
    //       //   errors
    //       // })
    //       // res.send("/createUser", {errors})
    //       console.log("fdsafdsafdasfdsafds" , req.body)
    //       res.json(errors)
    //       // console.log("res", res)
    //       // window.alert(errors)
    
    //       errors.map()
    //     } else {
    //       db.User.create({
    //         name: req.body.name,
    //         email: req.body.email,
    //         password: req.body.password,
    //         password2: req.body.password2,
    //       }).then(function(results) {
    //         res.redirect("/signin")
    //       }); 
    //     }



  render() {
      console.log("state errors", this.state.errors)
        // let table;

        // if (!this.state.errors.length) {
        //     table = <div></div>
        // } else {
        
        // }

    return (
      <div>
        <div>
            <h4 className="center-align"> Create Your Account </h4>
            
            {/* <table>
                { this.state.errors.map((error) => {
                    return <tr style={{ color: "#ff0000" }}> { error } </tr> 
                }) }
            </table> */}
           
        <div class="row">
          <form action="/newUser" method="POST" class="col s12" >
          {/* onSubmit={this.submit.bind(this)} */}
            <div class="row">
                <div class="input-field col s6">
                    <input name="name" id="textarea1" class="materialize-textarea"  placeholder="Name"/>
                    {/* value={this.state.name} onChange={this.handleChange.bind(this)} */}
                    {/* <label for="textarea1">Name</label> */}
                </div>
            </div>
            <div class="row">
                <div class="input-field col s6">
                    <input type="email" name="email" id="textarea1" class="materialize-textarea" placeholder="Email" />
                    {/* value={this.state.email} onChange={this.handleChange.bind(this)} */}
                    {/* <label for="textarea1">Email</label> */}
                </div>
            </div>
            <div class="row">
                <div class="input-field col s6">
                    {/* <label for="textarea1">Password</label> */}
                    <input name="password" type="password" id="textarea1" class="materialize-textarea" placeholder="Password"/>
                    {/* value={this.state.password} onChange={this.handleChange.bind(this)} */}
                    
                </div>
            </div>
            <div class="row">
                <div class="input-field col s6">
                    <input name="password2" type="password" id="textarea1" class="materialize-textarea" placeholder="Confirm Password"/>
                    {/* value={this.state.password2} onChange={this.handleChange.bind(this)} */}
                    {/* <label for="textarea1">Confirm Password</label> */}
                </div>
            </div>
            <button href="/newUser" type="submit"> Create Account </button>
          </form>
        </div>
      </div>
      </div>
    )
  }
}

export default NewUser
