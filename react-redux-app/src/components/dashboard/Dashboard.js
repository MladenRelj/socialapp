import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
// import ItemList from "../projects/ItemList";
// import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";

const Dashboard = () => {
  const { projects, auth, notifications } = useSelector((state) => ({
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
  }));

  if (!auth.uid) return <Redirect to="/signin" />;
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s6 m6">
          <ProjectList projects={projects} />
        </div>
        <div className="row">
          <div className="col s6 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default compose(
  firestoreConnect([
    {
      collection: "projects",
      orderBy: ["createdAt", "desc"],
    },
    { collection: "notifications", limit: 3, orderBy: ["time", "desc"] },
  ])
)(Dashboard);
