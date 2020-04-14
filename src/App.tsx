import React from "react";

import { UserList } from "./components";

import "./App.css";

function App(): JSX.Element {
  return (
    <div className="container">
      <h1 className="text-center my-5">List of users and their activity</h1>
      <UserList></UserList>
    </div>
  );
}

export default App;
