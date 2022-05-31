import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

export default function chatForum() {
  const [groupID, setGroupID] = useState();
  const [stdName, setStdName] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
  const [stdEmail, setStdEmail] = useState();
  const [allMsg, setAllMsg] = useState();
  const [group_id, setGroup_id] = useState();

  useEffect(() => {
    setStdEmail(JSON.parse(localStorage.getItem("user")).email);

    //get group _id by student email
    axios
      .get(
        `http://localhost:8070/stdGroup/${
          JSON.parse(localStorage.getItem("user")).email
        }`
      )
      .then((res) => {
        console.log(res.data);
        setGroup_id(res.data);
        localStorage.setItem("lsgroup_id", res.data);
      });

    //get messages from db
    axios
      .get(`http://localhost:8070/chat/${localStorage.getItem("lsgroup_id")}`)
      .then((res) => {
        setAllMsg(res.data);
        console.log(res.data);
      });
  }, []);

  const handleNewMessage = async (e) => {
    e.preventDefault();

    const newMessage = {
      group_id,
      groupID,
      stdName,
      stdEmail,
      subject,
      message,
    };
    console.log("41", newMessage);
    //send message to the db
    await axios.post(`http://localhost:8070/chat/`, newMessage).then(() => {
      alert("message send successfully");
      e.target.reset();
    });

    //get messages from db
    axios
      .get(`http://localhost:8070/chat/${localStorage.getItem("lsgroup_id")}`)
      .then((res) => {
        setAllMsg(res.data);
        console.log(res.data);
      });
  };
  return (
    <div className="body_container">
      {/*left side column */}
      <div className="left_container">
        <div>
          <label className="h-text text_space" style={{ color: "#FF5631" }}>
            CHAT
          </label>
          <br />
          <label className="h-text mb-5 ms-5" style={{ color: "#ffffff" }}>
            FORUM
          </label>
        </div>
        <form className=" pe-5" onSubmit={handleNewMessage}>
          <div className="form-group mb-3 mt-5">
            <label>Group ID</label>
            <input
              required
              type="text"
              className="form-control"
              id="groupID"
              onChange={(e) => {
                setGroupID(e.target.value);
              }}
            />
          </div>

          <div className="form-group mb-3">
            <label>Your Name</label>
            <input
              required
              type="text"
              className="form-control"
              id="researchTopic"
              onChange={(e) => {
                setStdName(e.target.value);
              }}
            />
          </div>
          <div className=" mb-5 ">
            <label>Subject</label>
            <input
              required
              type="text"
              className="form-control"
              id="researchTopic"
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />
          </div>
          <div className="form-group mb-5">
            <label>Message</label>
            <textarea
              required
              className="form-control"
              id="groupMembers"
              rows={5}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </div>
          <button type="submit" className="btn btn-success ">
            Add a new Discussion
          </button>
        </form>
      </div>

      {/*right side column */}
      <div className="right_container">
        {allMsg?.map((allMsg, index) => (
          <div key={index}>
            <Card className="mb-5">
              <Card.Header>{allMsg.stdName}</Card.Header>
              <Card.Body>
                <Card.Title>{allMsg.subject}</Card.Title>
                <Card.Text>{allMsg.message}</Card.Text>
                <Button variant="danger">Delete</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
