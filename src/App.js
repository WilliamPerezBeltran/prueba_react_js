import React from "react";
import logo from "./logo.svg";
import Movies from "./js/components/Movies";
import Sidenav from "./js/components/Sidenav";

function App() {
  return (
    <div>
      <Sidenav />
      <Movies />
    </div>
  );
}

export default App;
