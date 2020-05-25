import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProject } from "../../store/actions/projectAction";
import { Redirect } from "react-router-dom";

const CreateProject = (props) => {
  const { auth } = useSelector((state) => ({
    auth: state.firebase.auth,
  }));

  const dispatch = useDispatch();
  const create = (project) => dispatch(createProject(project));

  const [state, setState] = useState({
    title: "",
    content: "",
  });

  const titleHandler = (e) => {
    const title = e.target.value;
    setState({ ...state, title: title });
    console.log(state);
  };
  const contentHandler = (e) => {
    const content = e.target.value;
    setState({ ...state, content: content });
    console.log(state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    create(state);
    props.history.push("/");
  };

  if (!auth.uid) return <Redirect to="/signin" />;

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="grey lighten-4">
        <h5 className="grey-text text-darken-3">Create Project</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={titleHandler} />
        </div>

        <div className="input-field">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            className="materialize-textarea"
            onChange={contentHandler}
          ></textarea>
        </div>
        <div className="input-field">
          <button className="btn grey darken-1 z-depth-0">Create</button>
        </div>
      </form>
    </div>
  );
};

export default CreateProject;
