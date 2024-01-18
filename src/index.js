//Challenge. Render all the notes inside notes.js as a seperate Note
//component.

import React from "react";
//import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client'
import App from "./components/App";

//ReactDOM.render(, document.getElementById("root"));
createRoot(document.getElementById('root')).render(<App />);