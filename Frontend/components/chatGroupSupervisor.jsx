import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Styles/styles.css";
import { useHistory } from "react-router";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function chatGroupSupervisor() {
  const [allMsg, setAllMsg] = useState();
  const history = useHistory();

  useEffect(() => {
    const getAllMsg = async () => {
      //get messages from db
      const allChat = await axios
        .get(`http://localhost:8070/chat/`)
        .then((res) => {
          setAllMsg(res.data);
        })
        .catch((err) => {});
    };
    getAllMsg();
  }, []);

  const deleteMsg = async (e, id) => {
    e.preventDefault();
    console.log("id", id);

    let ans = window.confirm("Do you want to delete this request ?");

    if (ans) {
      await axios.delete(`http://localhost:8070/chat/${id}`).then((res) => {
        console.log(res);
        window.location.reload(false);
      });
    }
  };

  const handleReply = (e, id) => {
    e.preventDefault();
    console.log(id);
    localStorage.setItem("Message_ID", id);
    history.push("/reply");
  };
  return (
    <div className="allDoc_body_container">
      {/*left side column */}
      <div className="left_container"></div>

      {/*right side column */}

      <div className="right_container">
        {allMsg?.map((allMsg, index) => (
          <div key={index}>
            {console.log("allMsg", allMsg)}
            <div className="p-5">
              <h3>{allMsg.groupID}</h3>

              <Card className="mb-5">
                <Card.Header>{allMsg.stdName}</Card.Header>
                <Card.Body>
                  <Card.Title>{allMsg.subject}</Card.Title>
                  <Card.Text>{allMsg.message}</Card.Text>
                  <Button
                    variant="danger"
                    className="me-5"
                    onClick={(e) => handleReply(e, allMsg._id)}
                  >
                    Reply
                  </Button>
                  <Button
                    variant="danger"
                    className="ms-5"
                    onClick={(e) => deleteMsg(e, allMsg._id)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
