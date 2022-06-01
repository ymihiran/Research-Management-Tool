import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Styles/styles.css";
import { useHistory } from "react-router";
import { Card, Button } from "react-bootstrap";

export default function chatGroupSupervisor() {
  const [allMsg, setAllMsg] = useState();
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
  return (
    <div className="allDoc_body_container">
      {/*left side column */}
      <div className="left_container"></div>

      {/*right side column */}
      {/* <div className="allDoc_right_container">
        <div>
          <label className="h-text text_space" style={{ color: "#FF5631" }}>
            STUDENTS
          </label>
          <br />
          <label className="h-text ms-5">CHAT GROUP</label>
        </div>
        <div className=" mb-5 ">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-5">
            <div className="p-3">
              <Card
                className="row_poster ms-4"
                style={{ backgroundColor: "#ece9ff" }}
              >
                <CardBody className="p-5">
                  <CardTitle tag="h5">
                    <center>
                      <b>Y3S1</b>
                    </center>
                  </CardTitle>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div> */}

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
                  <Button variant="danger" className="me-5">
                    Reply
                  </Button>
                  <Button variant="danger" className="ms-5">
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
