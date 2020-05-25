export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    const doc = getFirestore().collection("projects").doc();
    const id = doc.id;
    console.log(getState());
    firestore
      .collection("projects")

      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        author_id: authorId,
        createdAt: new Date(),
        id: new Date().valueOf(),
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};

export const updateData = (update) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database

    const firestore = getFirestore();

    let document = firestore.collection("projects");
    document
      .get()
      .then((snapShot) => {
        const id = snapShot ? snapShot[id] : null;
        firestore
          .collection("projects")
          .doc(id)

          .update({ ...update });
      })

      .catch((err) => {
        dispatch({ type: "updated project error", err });
      });
  };
};
