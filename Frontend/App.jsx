import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import DocumentEvaluation from "./components/DocumentEvaluation";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PresentationEvaluation from "./components/PresentationEvaluation";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/doc" component={DocumentEvaluation} />
        <Route path="/presentation" component={PresentationEvaluation} />
      </Router>
    </div>
  );
}
export default App;
