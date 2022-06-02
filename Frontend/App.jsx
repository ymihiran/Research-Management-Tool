import React, {useEffect,useState,useContext} from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from 'axios';
import {NotFound} from './components/utils/NotFound/NotFound.js'


import UploadTemplate from "./components/UploadTemplate";
import SubmitTypes from "./components/SubmitTypes";
import SubmitTopic from "./components/SubmitTopic";
import EvaluateTopic from "./components/EvlauateTopic";
import AcceptTopic from "./components/AcceptTopic";
import TopicList from "./components/TopicList";
import StdTopicList from "./components/StdTopicList";
import AddMarking from "./components/AddMarking";
import EditTopic from "./components/EditTopic";
import Main from './components/Main';
import { ReactNotifications } from "react-notifications-component";



import SubmitDocs from "./components/SubmitDocs";
import AllStudentGroup from "./components/AllStudentGroup";
import AllTypes from "./components/AllTypes";
import MarkingList from "./components/MarkingList";
import EditMarking from "./components/EditMarking";
import EvaluatedTopicList from "./components/EvaluatedTopicList"
import EditEvaluatedTopic from "./components/EditEvaluatedTopic"
import SubmitTypes from "./components/SubmitTypes.jsx";

import DocumentEvaluation from "./components/DocumentEvaluation";
import PresentationEvaluation from "./components/PresentationEvaluation";
import AllDocuments from "./components/AllDocuments";
import RequestCoSupervisor from "./components/RequestCoSupervisor";
import StudentGroup from "./components/StudentGroup";
import UploadTemplate from "./components/UploadTemplate";

import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import AllUsers from './components/AllUsers';
import PanelMembers from './components/CheckPanelMembers'
import SelectPanelMembers from './components/SelectPanelMembers'


function App() {
  const [token, setToken] = useState(false)
  const [isLogged, setIsLogged] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [issupervisor, setIsSupervisor] = useState(false)
  const [ispanelmember, setIsPanelMember] = useState(false)
  const [iscosupervisor, setIsCoSupervisor] = useState(false)
  

  const refreshToken = async () =>{
      const res = localStorage.getItem("userAuthToken")
      setToken(res)
  }
  useEffect(() =>{
    const firstLogin = localStorage.getItem('firstLogin')
    if(firstLogin) refreshToken()

    if(token){
      const getUser = async () =>{
          try {

              const res =(JSON.parse(localStorage.getItem("user")).user_role);
              
             
              setIsLogged(true)
              res == "Admin" ? setIsAdmin(true): setIsAdmin(false)
              res== "Panel Member" ? setIsPanelMember(true): setIsPanelMember(false)
              res == "Supervisor" ? setIsSupervisor(true): setIsSupervisor(false)
              res == "Co-Supervisor" ? setIsCoSupervisor(true): setIsCoSupervisor(false)

          } catch (err) {
              alert(err.response.data.msg)
          }
      }

      getUser()
      
  }
},[token])


 return (
    <div>
 
      <ReactNotifications />
      <Router>

        <Route path="/"  exact component={Main} />
        <Route path="/profile/:id" exact component={isLogged? Profile:NotFound} />
        <Route path="/panelmembers" exact component={isAdmin? PanelMembers: NotFound} />
        <Route path="/selectpanel" exact component={isAdmin? SelectPanelMembers : NotFound} />
        <Route path="/allprof"  exact component={isAdmin? AllUsers: NotFound} /> 
        <Route path="/register" exact component={Register}/>
        <Route path="/login" exact component={Login} />
        <Route path="/SubmitTopic" component={SubmitTopic} />
        <Route path="/EvaluateTopic" component={EvaluateTopic} />
        <Route path="/EvaluatedTopicList" component={EvaluatedTopicList} />
        <Route path="/EditEvaluatedTopic" component={EditEvaluatedTopic} />
        <Route path="/AcceptTopic" component={AcceptTopic} />
        <Route path="/TopicList" component={TopicList} />
        <Route path="/StdTopicList" component={StdTopicList} />
        <Route path="/AddMarking" component={AddMarking} />
        <Route path="/EditTopic" component={EditTopic} />
        <Route path="/SubmitDocs" component={SubmitDocs} />
        <Route path="/AllStudentGroup" component={AllStudentGroup} />
        <Route path="/AllTypes" component={AllTypes} />
        <Route path="/MarkingList" component={MarkingList} />
        <Route path="/EditMarking" component={EditMarking} />
        <Route path="/Main" component={Main} />
        <Route path="/SubmitTypes" component={SubmitTypes} />
        <Route exact path="/doc" component={DocumentEvaluation} />
        <Route path="/presentation" component={PresentationEvaluation} />
        <Route path="/allDoc" component={AllDocuments} />
        <Route path="/reqCoSuper" component={RequestCoSupervisor} />
        <Route path="/StudentGroup" component={StudentGroup} />
        <Route path="/UploadTemplate" component={UploadTemplate} />
      </Router>
     
    </div> 
  );
}
export default App;
