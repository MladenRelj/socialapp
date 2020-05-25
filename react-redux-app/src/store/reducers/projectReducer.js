const initState = {};

const projectReducer = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("created project error", action.err);
      return state;
    case "Document successfully updated!":
      console.log("updated project", action.update);
      return state;
    case "Error updating document:":
      console.log("update project error", action.error);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
