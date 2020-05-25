const createUserReducer = (state = initState, action) => {
  switch (action.type) {
    case "USER_CREATE_SUCCESS":
      console.log("User is created ", action.project);
      return state;
    case "CREATE_USER_ERROR":
      console.log("created project error", action.err);
      return state;
    default:
      return state;
  }
};

export default createUserReducer;
