import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';

import SubmitTopic from "./components/SubmitTopic";
import EvaluateTopic from "./components/EvlauateTopic";
import AcceptTopic from "./components/AcceptTopic";
import TopicList from "./components/TopicList";
import StdTopicList from "./components/StdTopicList";
import AddMarking from "./components/AddMarking";

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
      </Router>

     
    </div>
  );
}
export default App;
