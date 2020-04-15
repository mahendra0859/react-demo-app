import React from "react";
import "react-calendar/dist/Calendar.css";

import { UserList, CustomClock } from "./components";

import "./App.css";

function App(): JSX.Element {
  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-center my-2">
        <h1 className="text-center mr-4 text-info">
          List of users and their activity
        </h1>
        <CustomClock />
      </div>
      <UserList></UserList>
    </div>
  );
}

export default App;
