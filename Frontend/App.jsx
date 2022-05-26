import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import {useDispatch, useSelector} from 'react-redux';
import {dispatchLogin, fetchUser, dispatchGetUser} from './redux/actions/authAction.js'
import axios from 'axios';

//Users
import Body from './components/profile/Body.js';

import UploadTemplate from "./components/UploadTemplate";
import SubmitTypes from "./components/SubmitTypes";
import StudentGroup from "./components/StudentGroup";


import SubmitTopic from "./components/SubmitTopic";
import EvaluateTopic from "./components/EvlauateTopic";
import AcceptTopic from "./components/AcceptTopic";
import TopicList from "./components/TopicList";
import StdTopicList from "./components/StdTopicList";
import AddMarking from "./components/AddMarking";


import SubmitDocs from "./components/SubmitDocs";
import AllStudentGroup from "./components/AllStudentGroup";
import AllTypes from "./components/AllTypes";

import MarkingList from "./components/MarkingList";
import EditMarking from "./components/EditMarking";

import DocumentEvaluation from "./components/DocumentEvaluation";
import PresentationEvaluation from "./components/PresentationEvaluation";
import AllDocuments from "./components/AllDocuments";
import SubmitTypes from "./components/SubmitTypes.jsx";
import RequestCoSupervisor from "./components/RequestCoSupervisor";



function App() {

  const dispatch = useDispatch()
  const token = useSelector(state => state.token)
  const auth = useSelector(state => state.auth)


  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin')
    if(firstLogin){
      const getToken = async () => {
        const res = await axios.post('/user/refresh_token', null)
        dispatch({type: 'GET_TOKEN', payload: res.data.access_token})
      }
      getToken()
    }
  },[auth.isLogged, dispatch])


  useEffect(() => {
    if(token){
      const getUser = () => {
        dispatch(dispatchLogin())

        return fetchUser(token).then(res => {
          dispatch(dispatchGetUser(res))
        })
      }
      getUser()
    }
  },[token, dispatch])




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

        <Route path="/MarkingList" component={MarkingList} />
        <Route path="/EditMarking" component={EditMarking} />
        <Route path="/SubmitTypes" component={SubmitTypes} />
        <Route exact path="/doc" component={DocumentEvaluation} />
        <Route path="/presentation" component={PresentationEvaluation} />
        <Route path="/allDoc" component={AllDocuments} />
        <Route path="/reqCoSuper" component={RequestCoSupervisor} />

      </Router>
    </div>
  );
}
export default App;
