import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

export default function chatForum() {
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
        <form className=" pe-5">
          <div className="form-group mb-3 mt-5">
            <label>Group ID</label>
            <input type="text" className="form-control" id="groupID" />
          </div>

          <div className="form-group mb-3">
            <label>Your Name</label>
            <input type="text" className="form-control" id="researchTopic" />
          </div>
          <div className=" mb-5 ">
            <label>Subject</label>
            <input type="text" className="form-control" id="researchTopic" />
          </div>
          <div className="form-group mb-5">
            <label>Message</label>
            <textarea className="form-control" id="groupMembers" rows={5} />
          </div>
          <button type="submit" className="btn btn-success ">
            Add a new Discussion
          </button>
        </form>
      </div>

      {/*right side column */}
      <div className="right_container">
        <Card>
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
