import React from "react";
import Login from "./Login";

var isLoggedIn = false;
// sbb yahi pai true false kaam kerrr rha hai .
// yaha true likhooge toh hello aayga false likhoge tph login page

function App() {
  return (
    <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Login />}</div>
  );
}

export default App;
