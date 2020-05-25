import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/actions/authActions";

const SignUp = () => {
  const { auth, authErr } = useSelector((state) => ({
    auth: state.firebase.auth,
    authErr: state.firebase.authErr,
  }));

  const dispatch = useDispatch();
  const register = (newUser) => dispatch(signUp(newUser));

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const firstNameHandler = (e) => {
    const fname = e.target.value;
    setState({ ...state, firstName: fname });
  };
  const lastNameHandler = (e) => {
    const lname = e.target.value;
    setState({ ...state, lastName: lname });
  };
  const emailHandler = (e) => {
    const email = e.target.value;
    setState({ ...state, email: email });
  };
  const passwordHandler = (e) => {
    const pass = e.target.value;
    setState({ ...state, password: pass });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    register(state);
    console.log(state);
  };

  if (auth.uid) return <Redirect to="/" />;

  return (
    <div className="container">
      <form onSubmit={handleSignUp} className="transparent">
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <label className=" grey-text text-lighten-5" htmlFor="firstName">
            First Name
          </label>
          <input
            autoComplete="off"
            className=" blue-grey-text text-darken-4"
            type="text"
            id="firstName"
            onChange={firstNameHandler}
          />
        </div>
        <div className="input-field">
          <label className=" grey-text text-lighten-5" htmlFor="lastName">
            Last Name
          </label>
          <input
            autoComplete="off"
            className=" blue-grey-text text-darken-4"
            type="text"
            id="lastName"
            onChange={lastNameHandler}
          />
        </div>
        <div className="input-field">
          <label className=" grey-text text-lighten-5" htmlFor="email">
            Email
          </label>
          <input
            className=" blue-grey-text text-darken-4"
            autoComplete="off"
            type="email"
            id="email"
            onChange={emailHandler}
          />
        </div>
        <div className="input-field">
          <label className=" grey-text text-lighten-5" htmlFor="password">
            Password
          </label>
          <input
            autoComplete="off"
            className=" blue-grey-text text-darken-4"
            autoComplete="off"
            type="password"
            id="password"
            onChange={passwordHandler}
          />
        </div>
        <div className="input-field">
          <button className="waves-effect waves-light btn">Sign Up</button>
          <div className="red-text center">
            {authErr ? <p>{authErr}</p> : null}
          </div>
        </div>
      </form>
    </div>
  );
};
export default SignUp;
