import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { usestrict } from "mobx";

usestrict(true);

ReactDOM.render(<App />, document.getElementById("root"));
