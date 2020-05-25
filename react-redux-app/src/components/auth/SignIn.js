import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

const SignIn = () => {
  const { auth, authErr } = useSelector((state) => ({
    auth: state.firebase.auth,
    authErr: state.firebase.authErr,
  }));
  const dispatch = useDispatch();
  const signin = (creds) => dispatch(signIn(creds));

  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const emailHandler = (e) => {
    const email = e.target.value;
    setState({ ...state, email: email });
  };
  const passwordHandler = (e) => {
    const password = e.target.value;
    setState({ ...state, password: password });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signin(state);
  };

  if (auth.uid) return <Redirect to="/" />;
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m4 l8">
          <form onSubmit={handleSubmit} className="transparent">
            <h5 className="grey-text text-darken-3">Sign In</h5>
            <div className="input-field input-outlined">
              <label className=" grey-text text-lighten-5" htmlFor="email">
                Email
              </label>
              <input
                autoComplete="off"
                className=" blue-grey-text text-darken-4"
                type="email"
                id="email"
                onChange={emailHandler}
              />
            </div>
            <div className="input-field">
              <label className="grey-text text-lighten-5" htmlFor="password">
                Password
              </label>
              <input
                autoComplete="off"
                className="blue-grey-text text-darken-4"
                type="password"
                id="password"
                onChange={passwordHandler}
              />
            </div>
            <div className="input-field">
              <button className="waves-effect waves-light btn">Login</button>
              <div className="red-text center">
                {authErr ? <p>{authErr}</p> : null}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
