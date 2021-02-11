import React from 'react';
import './Login.scss';
import { GoogleLogin } from 'react-google-login';

export const Login = () => {

  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };

  return (<>
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light py-3">
        <div className="container">
          <a href="#" className="navbar-brand">
            <img
              src="https://res.cloudinary.com/mhmd/image/upload/v1571398888/Group_1514_tjekh3_zkts1c.svg"
              alt="logo" width="150"/>
          </a>
        </div>
      </nav>
    </header>
    <div className="container">
      <div className="row py-5 mt-4 align-items-center">
        <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
          <img src="https://res.cloudinary.com/mhmd/image/upload/v1569543678/form_d9sh6m.svg" alt=""
               className="img-fluid mb-3 d-none d-md-block"/>
          <h1>Create an Account</h1>
        </div>

        <div className="col-md-7 col-lg-6 ml-auto">
          <form action="#">
            <div className="row">
              <div className="input-group col-lg-6 mb-4">
                <div className="input-group-prepend">
                            <span
                              className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-user text-muted"/>
                            </span>
                </div>
                <input id="firstName" type="text" name="firstname" placeholder="First Name"
                       className="form-control bg-white border-left-0 border-md"/>
              </div>

              <div className="input-group col-lg-6 mb-4">
                <div className="input-group-prepend">
                            <span
                              className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-user text-muted"/>
                            </span>
                </div>
                <input id="lastName" type="text" name="lastname" placeholder="Last Name"
                       className="form-control bg-white border-left-0 border-md"/>
              </div>

              <div className="input-group col-lg-12 mb-4">
                <div className="input-group-prepend">
                            <span
                              className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-envelope text-muted"/>
                            </span>
                </div>
                <input id="email" type="email" name="email" placeholder="Email Address"
                       className="form-control bg-white border-left-0 border-md"/>
              </div>

              <div className="input-group col-lg-12 mb-4">
                <div className="input-group-prepend">
                            <span
                              className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-phone-square text-muted"/>
                            </span>
                </div>
                <select id="countryCode" name="countryCode" style={{maxWidth: '80px'}}
                        className="custom-select form-control bg-white border-left-0 border-md h-100 font-weight-bold text-muted">
                  <option value="">+12</option>
                  <option value="">+10</option>
                  <option value="">+15</option>
                  <option value="">+18</option>
                </select>
                <input id="phoneNumber" type="tel" name="phone" placeholder="Phone Number"
                       className="form-control bg-white border-md border-left-0 pl-3"/>
              </div>

              <div className="input-group col-lg-12 mb-4">
                <div className="input-group-prepend">
                            <span
                              className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-black-tie text-muted"/>
                            </span>
                </div>
                <select id="job" name="jobtitle"
                        className="form-control custom-select bg-white border-left-0 border-md">
                  <option value="">Choose your job</option>
                  <option value="">Designer</option>
                  <option value="">Developer</option>
                  <option value="">Manager</option>
                  <option value="">Accountant</option>
                </select>
              </div>

              <div className="input-group col-lg-6 mb-4">
                <div className="input-group-prepend">
                            <span
                              className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-lock text-muted"/>
                            </span>
                </div>
                <input id="password" type="password" name="password" placeholder="Password"
                       className="form-control bg-white border-left-0 border-md"/>
              </div>

              <div className="input-group col-lg-6 mb-4">
                <div className="input-group-prepend">
                            <span
                              className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-lock text-muted"/>
                            </span>
                </div>
                <input id="passwordConfirmation" type="text" name="passwordConfirmation"
                       placeholder="Confirm Password"
                       className="form-control bg-white border-left-0 border-md"/>
              </div>

              <div className="form-group col-lg-12 mx-auto mb-0">
                <a href="#" className="btn btn-primary btn-block py-2">
                  <span className="font-weight-bold">Create your account</span>
                </a>
              </div>

              <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                <div className="border-bottom w-100 ml-5"/>
                <span className="px-2 small text-muted font-weight-bold text-muted">OR</span>
                <div className="border-bottom w-100 mr-5"/>
              </div>


              <div className="form-group col-lg-12 mx-auto">
                <GoogleLogin
                  clientId={'463390272159-t75qqh9ajddlb5eg36o2b8ejqmahkjao.apps.googleusercontent.com'}
                  render={renderProps => (
                    <button onClick={renderProps.onClick} className="btn btn-primary btn-block py-2 btn-google">
                      <i className="fa fa-google mr-2"/>
                      <span className="font-weight-bold">Continue with Google</span>
                    </button>
                  )}
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={'single_host_origin'}
                />
               {/* <button className="btn btn-primary btn-block py-2 btn-facebook">
                  <i className="fa fa-facebook-f mr-2"/>
                  <span className="font-weight-bold">Continue with Facebook</span>
                </button>
                <button className="btn btn-primary btn-block py-2 btn-twitter">
                  <i className="fa fa-twitter mr-2"/>
                  <span className="font-weight-bold">Continue with Twitter</span>
                </button>*/}
              </div>


              <div className="text-center w-100">
                <p className="text-muted font-weight-bold">Already Registered? <a href="#"
                                                                                  className="text-primary ml-2">Login</a>
                </p>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  </>);
};
