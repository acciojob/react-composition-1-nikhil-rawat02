
import React, { useState } from "react";
import './../styles/App.css';
import Tabs from "./Tabs";

const App = () => {
  const [output, setOutput] = useState("");
  const tabs = [{title: "Tab 1",content : ""},{title: "Tab 2",content : ""},{title: "Tab 3",content : ""}]
  return (
    <div>
        <Tabs tabs = {tabs} setOutput= {setOutput} />
        <p>{output}</p>
    </div>
  )
}

export default App
