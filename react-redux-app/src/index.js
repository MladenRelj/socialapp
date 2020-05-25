import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import thunk from "redux-thunk";
import { getFirestore, reduxFirestore } from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import fbconfig from "./config/fbConfig";
import { createFirestoreInstance } from "redux-firestore";

import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";

// react-redux-firebase config
const reduxFirebaseConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
  enableRedirectHandling: false,
  resetBeforeLogin: false,
};

const middleware = [thunk.withExtraArgument({ getFirebase, getFirestore })];
function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) return <div>splash screen...</div>;
  return children;
}
const store = createStore(
  rootReducer,

  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__(),
    reduxFirestore(fbconfig)
  )
);

const rrfProps = {
  firebase,
  config: reduxFirebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
  userProfile: "users", // where profiles are stored in database
  presence: "presence", // where list of online users is stored in database
  sessions: "sessions",
};
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
          <App />
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
