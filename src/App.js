import React from "react";
import "./styles.css";
import Username from "./Component/HelloWorld"
import Welcome from "./Component/ClassComponent"
export default function App() {
  return (
    <div className="App">
      <Username name="Sharavni" surname="magar"/>
      <Username name="Shaurya"/>
      <Username name="Samarth"/>
     <Welcome/>
    </div>
  );
}
