import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
import * as API from '../api/API';
import Signin from "./Signin";
import Home from "./Home";
import '../App.css';



class Basepage extends Component {


    constructor() {
        super();
        this.state = {
           isLoggedIn: false,
            message: '',
            username: '',
            images: []
        };
    }


    handleSubmit = (userdata) => {
        console.log('userdata before do:',userdata.username);

        API.doLogin(userdata)
            .then((data) => {
                console.log(data);
                if (data.status === 401) {
                    console.log('inside 401');

                    this.setState({
                        isLoggedIn: false,
                        message: "Login failed, please sign in again"
                    });
                    this.props.history.push("/");
                } else {
                        this.props.history.push("/home");
                }
            });
    };

    handleCreateAccount = (userdata) => {
        API.doSignUp(userdata)
            .then((status) => {
                if (status === 201) {
                  this.setState({
                      isLoggedIn: false,
                      message: "Something's wrong, Try again..!!"
                  });

                } else  {
                    this.props.history.push("/");
                }
            });
    };

    handleLogout = () => {
        API.doLogout()
            .then((status)=> {

                        this.props.history.push("/");
                        this.props.history.push("/signin");
                }
            );


    };

    render() {
        return (
            <div className="container-fluid">
                <Route exact path="/" render={() => (
                    <div>
                        <Signin handleCreateAccount={this.handleCreateAccount} handleSubmit={this.handleSubmit}/>

                    </div>
                )}/>
              <Route exact path="/signin" render={() => (
                    <div>
                        <Signin handleCreateAccount={this.handleCreateAccount} handleSubmit={this.handleSubmit}
                        />

                    </div>
                )}/>
              <Route exact path="/home" render={() => (
                    <div>
                    <Home handleLogout={this.handleLogout} currentUser={this.state.username}/>
                    </div>

                )}/>
            </div>
        );
    }
}

export default withRouter(Basepage);
