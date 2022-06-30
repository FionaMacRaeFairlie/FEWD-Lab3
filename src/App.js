import React from "react";
// import Search from "./components/Search"
import Search from "./components/SearchUsingClasses"
import "bootstrap/dist/css/bootstrap.min.css";
import { items } from "./data/data";

function App() {
  return (
    <div className="container">
      <Search details={items}/>
      </div>
  );
}
export default App;
