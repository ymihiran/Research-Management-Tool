import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import DocumentEvaluation from "./components/DocumentEvaluation";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PresentationEvaluation from "./components/PresentationEvaluation";
import AllDocuments from "./components/AllDocuments";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/doc" component={DocumentEvaluation} />
        <Route path="/presentation" component={PresentationEvaluation} />
        <Route path="/allDoc" component={AllDocuments} />
      </Router>
    </div>
  );
}
export default App;
