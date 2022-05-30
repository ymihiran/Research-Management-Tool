import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import UploadTemplate from "./components/UploadTemplate";
import SubmitTypes from "./components/SubmitTypes";
import StudentGroup from "./components/StudentGroup";

import { BrowserRouter as Router, Route } from "react-router-dom";
import SubmitTopic from "./components/SubmitTopic";
import EvaluateTopic from "./components/EvlauateTopic";
import AcceptTopic from "./components/AcceptTopic";
import TopicList from "./components/TopicList";
import StdTopicList from "./components/StdTopicList";
import AddMarking from "./components/AddMarking";

import SubmitDocs from "./components/SubmitDocs";
import AllStudentGroup from "./components/AllStudentGroup";
import AllTypes from "./components/AllTypes";
import AllCreateTypes from "./components/AllCreateTypes";

import MarkingList from "./components/MarkingList";
import EditMarking from "./components/EditMarking";

import DocumentEvaluation from "./components/DocumentEvaluation";
import PresentationEvaluation from "./components/PresentationEvaluation";
import AllDocuments from "./components/AllDocuments";
import SubmitTypes from "./components/SubmitTypes.jsx";
import RequestCoSupervisor from "./components/RequestCoSupervisor";
import UpdateUploadTemplate from "./components/UpdateUploadTemplate";
import DownloadTemplate from "./components/DownloadTemplate";

function App() {
  return (
    <div>
      <Router>
        <Route path="/SubmitTopic" component={SubmitTopic} />
        <Route path="/EvaluateTopic" component={EvaluateTopic} />
        <Route path="/AcceptTopic" component={AcceptTopic} />
        <Route path="/TopicList" component={TopicList} />
        <Route path="/StdTopicList" component={StdTopicList} />
        <Route path="/AddMarking" component={AddMarking} />

        <Route path="/SubmitTypes" component={SubmitTypes} />
        <Route path="/StudentGroup" component={StudentGroup} />
        <Route path="/SubmitDocs" component={SubmitDocs} />
        <Route path="/UploadTemplate" component={UploadTemplate} />
        <Route path="/AllStudentGroup" component={AllStudentGroup} />
        <Route path="/AllTypes" component={AllTypes} />

        <Route path="/AllCreateTypes" component={AllCreateTypes} />

        <Route path="/MarkingList" component={MarkingList} />
        <Route path="/EditMarking" component={EditMarking} />
        <Route path="/SubmitTypes" component={SubmitTypes} />
        <Route exact path="/doc" component={DocumentEvaluation} />
        <Route path="/presentation" component={PresentationEvaluation} />
        <Route path="/allDoc" component={AllDocuments} />
        <Route path="/reqCoSuper" component={RequestCoSupervisor} />
        <Route path="/UpdateTemplate" component={UpdateUploadTemplate} />
        <Route path="/DownloadTemplate" component={DownloadTemplate} />
      </Router>
    </div>
  );
}
export default App;
