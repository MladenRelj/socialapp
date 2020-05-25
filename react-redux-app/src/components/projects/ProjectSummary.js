import React from "react";
import moment from "moment";

const ProjectSummary = ({ project }) => {
  return (
    <div className="row">
      <div className="col s12 m12">
        <div className="card blue-grey darken-2">
          <div className="card-content white-text">
            <span className="card-title ">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action blue-grey-text text-lighten-4">
            <div>
              <i>
                Posted by {project.authorFirstName} {project.authorLastName}
              </i>
            </div>
            {moment(project.createdAt.toDate()).calendar()}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectSummary;
