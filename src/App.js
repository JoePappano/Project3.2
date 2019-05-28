import React from "react";
import Navigate from "./components/Navigate";
import FootComp from "./components/FootComp";
import Jumbotron from "./components/Jumbotron";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./components/SignIn"
import CreateListing from "./components/CreateListing";
import BecomeAProvider from "./components/BecomeAProvider";
import NewUser from "./components/NewUser";
import ListingsTable from "./components/ListingsTable";
import Errors from "./components/Errors";
import './parallax-template/css/materialize.css'
import './parallax-template/css/materialize.min.css'
import './parallax-template/css/style.css'

function App(){
    constructor(props) {
        super(props);
        this.state = {}
        this.connecToServer = this.connecToServer.bind(this);
      }
      connecToServer() {
        fetch('/');
      }
    
      componentDidMount() {
        this.connecToServer();
      }

    return(
        <div id="app-container">
            <BrowserRouter>
                <div>
                    <Navigate/>
                    <Switch>
                        <Route path="/" component={Jumbotron} exact/>
                        <Route path="/signIn" component={SignIn} />
                        <Route path="/createListing" component={CreateListing} />
                        <Route path="/createProviderAccount" component={BecomeAProvider} />
                        <Route path="/createUser" component={NewUser} />
                        <Route path="/listingsTable" component={ListingsTable} />
                        <Route path="/errors" component={Errors} />
                        {/* <Route path="/createAccount" component={createAccount} /> */}
                    </Switch>
                    <FootComp/>
                </div>
            </BrowserRouter>
            
        </div>
    )
}
export default App