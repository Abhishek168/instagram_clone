import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Login from "./component/Login";

// images
import Post1 from "../src/Image/abc.jpg";
import Post2 from "../src/Image/picnic.jpeg";
import Post3 from "../src/Image/kishan.jpeg";
import Post4 from "../src/Image/arvind1.jpeg";
import Post5 from "../src/Image/arvindFamily.jpeg";

import "./App.css";

function App() {
  const allPost = [
    {
      id: 1,
      userName: "@i.am_abhii",
      userPost: Post1,
      caption: "Believer :)",
      isLike: false,
    },
    {
      id: 2,
      userName: "@DummSI",
      userPost: Post2,
      caption: "Dreamer (:)",
      isLike: false,
    },
    {
      id: 3,
      userName: "@kishan",
      userPost: Post3,
      caption: "High Hopes",
      isLike: false,
    },
    {
      id: 4,
      userName: "@Arvind",
      userPost: Post4,
      caption: "Dope",
      isLike: false,
    },
    {
      id: 5,
      userName: "@Hiral",
      userPost: Post5,
      caption: "Family",
      isLike: false,
    },
  ];
  return (
    <>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <Dashboard allPost={allPost} />
                </>
              );
            }}
          ></Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
