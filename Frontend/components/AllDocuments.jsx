import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Styles/styles.css";
import { useHistory } from "react-router";

export default function AllDocuments() {
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
        alert("Can't get Document details ");
      });
  }, []);

  const setData = (data) => {
    console.log("data", data);
    let { GroupID, ResearchField, Document, ResearchTopic, DocType, _id } =
      data;
    localStorage.setItem("Group_ID", GroupID);
    localStorage.setItem("Research_Field", ResearchField);
    localStorage.setItem("rTopic", ResearchTopic);
    localStorage.setItem("Link", Document);
    localStorage.setItem("DocType", DocType);
    localStorage.setItem("DocID", _id);
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
            SUBMITTED
          </label>
          <br />
          <label className="h-text">RESEARCH DOCUMENTS</label>
        </div>
        <div className="allDoc_box mb-5 ">
          <table className="table table-hover table-borderless">
            <thead>
              {/* <tr style={{ height: "50px" }}>
                <th scope="col">Group ID</th>
                <th scope="col">Research Field</th>
                <th scope="col">Submission Type </th>
                <th scope="col">Comment</th>
                <th scope="col"></th>
              </tr> */}
            </thead>
            <tbody>
              <tr style={{ height: "80px" }}>
                <th scope="col">Group ID</th>
                <th scope="col">Research Field</th>
                <th scope="col">Submission Type </th>
                <th scope="col">Comment</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
              </tr>
              {docList?.map((docList, index) => (
                <tr key={index} className="" style={{ height: "80px" }}>
                  <td>{docList.GroupID}</td>
                  <td>{docList.ResearchField}</td>
                  <td>{docList.DocType}</td>
                  <td>{docList.Comment}</td>
                  {docList.Status == "pending" ? (
                    <td className="text-danger fw-bold">{docList.Status}</td>
                  ) : (
                    <td className="text-success fw-bold">{docList.Status}</td>
                  )}
                  {docList.Status == "pending" ? (
                    <td>
                      <button
                        type="submit"
                        className="btn allDoc_button "
                        style={{ cursor: "pointer" }}
                        onClick={() => setData(docList)}
                      >
                        Evaluate
                      </button>
                    </td>
                  ) : (
                    <td>
                      <button
                        disabled
                        type="submit"
                        className="btn evaluate_btn"
                        onClick={() => setData(docList)}
                      >
                        Evaluate
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
