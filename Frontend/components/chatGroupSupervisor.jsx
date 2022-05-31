import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Styles/styles.css";
import { useHistory } from "react-router";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

export default function chatGroupSupervisor() {
  const [docList, setDocList] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axios
      .get(`http://localhost:8070/document/`)
      .then((res) => {
        setDocList(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        alert("Can't get Document details: " + err.message);
      });
  }, []);

  const setData = (data) => {
    let { Group_ID, Research_Field } = data;
    localStorage.setItem("Group_ID", Group_ID);
    localStorage.setItem("Research_Field", Research_Field);
    history.push("/Doc");
  };

  return (
    <div className="allDoc_body_container">
      {/*left side column */}
      <div className="left_container"></div>

      {/*right side column */}
      <div className="allDoc_right_container">
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
          {/* <table className="table table-hover table-borderless">
            <thead>
              <tr>
                <th scope="col">Group ID</th>
                <th scope="col">Research Field</th>
                <th scope="col">Comment</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {docList?.map((docList, index) => (
                <tr key={index} className="">
                  <td>{docList.Group_ID}</td>
                  <td>{docList.Research_Field}</td>
                  <td>{docList.Comment}</td>
                  <td>
                    <button
                      type="submit"
                      className="btn allDoc_button "
                      onClick={() => setData(docList)}
                    >
                      Evaluate
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */}
        </div>
      </div>
    </div>
  );
}
