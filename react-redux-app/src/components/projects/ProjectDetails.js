import React, { useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { updateData } from "../../store/actions/projectAction";
import moment from "moment";

const ProjectDetails = ({ props, match }) => {
  const id = match.params.id;
  const { data, project, auth } = useSelector((state) => ({
    data: state.firestore,
    project: state.firestore.data.projects
      ? state.firestore.data.projects[id]
      : null,
    auth: state.firebase.auth,
  }));
  console.log(data);

  const dispatch = useDispatch();
  const update = (update) => dispatch(updateData(update));
  const [state, setState] = useState({
    content: "",
  });

  const contentHandler = (e) => {
    const content = e.target.value;
    setState({ ...state, content: content });
    console.log(state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    update(state);
    return <Redirect to="/" />;
  };

  const handleOnClick = () => {
    const form = document.getElementById("form");
    if (form.style.visibility === "hidden") {
      form.style.visibility = "visible";
    } else {
      form.style.visibility = "hidden";
    }
  };

  if (!auth.uid) return <Redirect to="/signin" />;
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card-panel z-depth-1  grey lighten-3">
          <div className="card-content">
            <a className="btn">
              <i
                className="material-icons"
                onClick={project.author_id === auth.uid ? handleOnClick : null}
              >
                edit
              </i>
            </a>
            <h4 className="card-title">{project.title}</h4>
            <p className="flow-text transparent">{project.content}</p>

            <div className="card-action darken-text text-darken-2">
              <div>
                <i>
                  Posted by {project.authorFirstName} {project.authorLastName}
                </i>
              </div>
              <div>{moment(project.createdAt.toDate()).calendar()} </div>
            </div>
            <form
              id="form"
              onSubmit={handleSubmit}
              style={{ visibility: "hidden" }}
            >
              <label htmlFor="update">Edit text</label>
              <input type="text" id="content" onChange={contentHandler} />
              <button className="btn">Update</button>
            </form>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    );
};

// mora da ide ownProps jer samo props ne moze

const mapDispatchToProps = (dispatch) => {
  return {
    updateData: (project) => dispatch(updateData(project)),
  };
};

export default compose(
  connect(
    firestoreConnect([
      {
        collection: "projects",
      },
    ])
  )(ProjectDetails)
);
