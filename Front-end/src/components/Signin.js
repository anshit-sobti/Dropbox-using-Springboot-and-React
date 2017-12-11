import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import signin from '../signin.png';
//https://dropboxmainblog.files.wordpress.com/2017/02/dropbox-plus.gif?w=650&h=380
class Signin extends Component {
    static propTypes = {
    handleSubmit: PropTypes.func.isRequired
    };

    state = {
        firstname: '',
        lastname: '',
        email: '',
        username: '',
        password: '',
        signIn: true

    };


    componentWillMount() {
        this.setState({
            username: '',
            password: ''
        });

    }



    renderSignIn() {

        return (
            <div>
              <link rel='stylesheet' href='/stylesheets/style.css' />
               <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' />
                <header className="mast-head">
                <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-2">
                    </div>
                  <div className="col-lg-3 col-md-3 col-sm-3">

                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-2 center_elements">
                    <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4">
                    <img src="https://cfl.dropboxstatic.com/static/images/logo_catalog/dropbox_logo_glyph_2015_m1-vfleInWIl.svg"
                         alt="" className="login-or-register-img"/>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                    <img id="logo" src="https://cfl.dropboxstatic.com/static/images/logo_catalog/dropbox_logo_text_2015_m1-vflV-vZRB.svg"
                         alt="" className="login-or-register-img"/>
                    </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3">
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-2">
                    </div>
                </div>
              </header>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


                <div className="row justify-content-md-center">
                    <div className="col-md-4">
                           <img src={signin} style={{width:"500px",height:"400px"}}
                                alt="" className="login-or-register-img"/>
                    </div>

                    <div className="col-md-4">

                        <form>
                            <div className="form-group">
                              <br/><br/><br/>
                                <div className="login-register-header">Sign in</div>
                            </div>
                            <div className="login-register-switch">
                                <label className="login-register-switch-link"
                                       onClick={()=>{
                                        this.setState({
                                            signIn: false
                                        });
                                    }
                                    }
                                >
                                    or create an account
                                </label>


                            </div>

                            <br/>
                            <div className="form-group">
                                <hr/>
                                <input
                                    className="form-control"
                                    type="text"
                                    label="Username"
                                    placeholder="Email"
                                    value={this.state.username}
                                    onChange={(event) => {
                                        this.setState({
                                            username: event.target.value
                                        });
                                    }}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="password"
                                    label="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={(event) => {
                                        this.setState({
                                            password: event.target.value
                                        });
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-6">
                                        <br/>
                                        <input className="checkbox_label" type="checkbox" id="cb" name="remember me"/>

                                        <label className="checkbox_label">Remember me</label><br/>
                                    </div>
                                    <div className="col-md-6">
                                        <br/>
                                        <button
                                            className="btn btn-primary Sign-in-button"
                                            type="button"
                                            onClick={()=>{
                                              console.log("aaj");
                                              console.log(this.props);
                                              console.log(this.state.password);
                                              this.props.handleSubmit({username:this.state.username,password:this.state.password})}}>
                                            Sign in
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-2">
                    </div>
                </div>
                <br/><br/><br/><br/><br/><br/><br/>
                <div className="container">
                <div id="ftr1" className="panel">
                <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8">
                <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3">

                </div>

                <div className="col-lg-3 col-md-3 col-sm-3">

                </div>

                <div className="col-lg-3 col-md-3 col-sm-3">

                </div>

                <div className="col-lg-3 col-md-3 col-sm-3">

                </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">


                </div>
                </div>
                </div>
                </div>



            </div>
        );


    }

    renderSignUp() {


        return (
            <div>
              <div className="row">
                  <div className="col-lg-2 col-md-2 col-sm-2">
                  </div>
                <div className="col-lg-3 col-md-3 col-sm-3">

                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 center_elements">
                  <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4">
                  <img src="https://cfl.dropboxstatic.com/static/images/logo_catalog/dropbox_logo_glyph_2015_m1-vfleInWIl.svg"
                       alt="" className="login-or-register-img"/>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                  <img id="logo" src="https://cfl.dropboxstatic.com/static/images/logo_catalog/dropbox_logo_text_2015_m1-vflV-vZRB.svg"
                       alt="" className="login-or-register-img"/>
                  </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                {/*<h3 className="center_elements"> <a>Download the app</a></h3>*/}
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2">
                  </div>
              </div>

                <br/><br/><br/><br/><br/><br/>


                <div className="row justify-content-md-center">
                    

                    <div className="col-md-4">

                        <form>
                            <div className="form-group">
                                <div className="login-register-header">Create an account</div>
                            </div>
                            <div className="login-register-switch">
                                <label onClick={()=>{
                                    this.setState({
                                        signIn: true
                                    });}}
                                       className="login-register-switch-link">
                                        or log in
                                </label>
                            </div>

                            <br/>
                            <div className="form-group">
                                <hr/>
                                <input
                                    className="form-control"
                                    type="text"
                                    label="FirstName"
                                    placeholder="First name"
                                    value={this.state.firstname}
                                    onChange={(event) => {
                                        this.setState({
                                            firstname: event.target.value
                                        });
                                    }}
                                />
                            </div>

                            <div className="form-group">
                                <hr/>
                                <input
                                    className="form-control"
                                    type="text"
                                    label="LastName"
                                    placeholder="Last name"
                                    value={this.state.lastname}
                                    onChange={(event) => {
                                        this.setState({
                                            lastname: event.target.value
                                        });
                                    }}
                                />
                            </div>

                            <div className="form-group">
                                <hr/>
                                <input
                                    className="form-control"
                                    type="text"
                                    label="Email"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={(event) => {
                                        this.setState({
                                            email: event.target.value
                                        });
                                    }}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="password"
                                    label="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={(event) => {
                                        this.setState({
                                            password: event.target.value
                                        });
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-6">
                                        <br/>
                                        <input className="checkbox_label" type="checkbox" id="cb" name="remember me"/>

                                        <label className="checkbox_label"> I agree to dropbox terms.</label>
                                    </div>
                                    <div className="col-md-6">
                                        <br/>
                                        <button
                                            className="btn btn-primary Sign-in-button"
                                            type="button"
                                            onClick={()=>{
                                              this.setState({
                                                signIn:true
                                              });
                                              this.props.handleCreateAccount({email:this.state.email,password:this.state.password,firstName:this.state.firstname,lastName:this.state.lastname})}}>
                                            Create an account
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-2">
                    </div>
                </div>
                <br/><br/><br/><br/><br/><br/><br/>
                <div className="container">
                <div id="footer" className="panel">
                <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8">
                <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3">

                </div>

                <div className="col-lg-3 col-md-3 col-sm-3">

                </div>

                <div className="col-lg-3 col-md-3 col-sm-3">

                </div>

                <div className="col-lg-3 col-md-3 col-sm-3">

                </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">


                </div>
                </div>
                </div>
                </div>

            </div>
        );


    }


    render() {
        if (this.state.signIn) {

            return this.renderSignIn();
        } else {
            return this.renderSignUp();
        }
    }

}


export default Signin;
