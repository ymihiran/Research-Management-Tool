import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.css";


import {BrowserRouter as Router, Route} from 'react-router-dom';
import SubmitTopic from "./components/SubmitTopic";
import EvaluateTopic from "./components/EvlauateTopic";
import AcceptTopic from "./components/AcceptTopic";
import TopicList from "./components/TopicList";
import StdTopicList from "./components/StdTopicList";
import AddMarking from "./components/AddMarking";
import DocumentEvaluation from "./components/DocumentEvaluation";
import PresentationEvaluation from "./components/PresentationEvaluation";
import AllDocuments from "./components/AllDocuments";
import SubmitTypes from "./components/SubmitTypes.jsx"
import Template from "./components/Template.jsx";


function App() {
  return (
    <div>

      <Router>
        <Route path="/SubmitTopic" component={SubmitTopic}/>
        <Route path="/EvaluateTopic" component={EvaluateTopic}/>
        <Route path="/AcceptTopic" component={AcceptTopic}/>
        <Route path="/TopicList" component={TopicList}/>
        <Route path="/StdTopicList" component={StdTopicList}/>
        <Route path="/AddMarking" component={AddMarking}/>
        <Route path="/SubmitTypes" component={SubmitTypes}/>
        <Route exact path="/doc" component={DocumentEvaluation} />
        <Route path="/presentation" component={PresentationEvaluation} />
        <Route path="/allDoc" component={AllDocuments} />
      </Router>

    </div>
  );
}
export default App;
