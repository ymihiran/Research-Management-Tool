import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Styles/styles.css";

export default function DocumentEvaluation() {
  const [groupID, setGroupID] = useState();
  const [researchField, setResearchField] = useState();
  const [request, setRequest] = useState([]);
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    setGroupID(localStorage.getItem("Group_ID"));
    setResearchField(localStorage.getItem("Research_Field"));

    axios
      .get(
        `http://localhost:8070/markingScheme/one/${localStorage.getItem(
          "Research_Field"
        )}/${"Document"}`
      )
      .then((res) => {
        setRequest(res.data);

        console.log("res.data", res.data);
        console.log("request", request.sid);
        let { _id, sid, specialization, schemeType, marks, criteria } = request;
        console.log("sid", sid);
        console.log("criteria", JSON.stringify(criteria));
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <div className="body_container">
      {/*left side column */}
      <div className="left_container">
        <div>
          <label className="h-text text_space" style={{ color: "#FF5631" }}>
            DOCUMENT
          </label>
          <br />
          <label className="h-text" style={{ color: "#ffffff" }}>
            EVALUATION
          </label>
        </div>
        <form>
          <div className="form-group mb-3 mt-5">
            <label>Group ID</label>
            <input
              type="text"
              disabled
              className="form-control"
              id="groupID"
              value={groupID}
            />
          </div>

          <div className="form-group mb-3">
            <label>Research Topic</label>
            <input
              type="text"
              disabled
              className="form-control"
              id="researchTopic"
            />
          </div>
          <div className="form-group mb-5">
            <label>Group Members</label>
            <textarea
              className="form-control"
              disabled
              id="groupMembers"
              rows={4}
            />
          </div>
          <button type="submit" className="btn btn-success ">
            Download Document
          </button>
        </form>
      </div>

      {/*right side column */}
      <div className="right_container">
        <form>
          <ul className="list-group">
            <div className="criteria_box mb-4 fw-bold">
              <div className="form-group row mb-4 criteria_row">
                <div className="col ">
                  <label>Criteria Name </label>
                </div>
                <div className="col">
                  <label>25</label>
                </div>
                <div className="col-2">
                  <input
                    type="number"
                    min="0"
                    max="25"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-group row mb-4 criteria_row">
                <div className="col">
                  <label>Criteria Name </label>
                </div>
                <div className="col">
                  <label>25</label>
                </div>
                <div className="col-2">
                  <input
                    type="number"
                    min="0"
                    max="25"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-group row mb-4 criteria_row">
                <div className="col">
                  <label>Criteria Name </label>
                </div>
                <div className="col">
                  <label>25</label>
                </div>
                <div className="col-2">
                  <input type="number" className="form-control" />
                </div>
              </div>

              <div className="form-group row mb-4 criteria_row">
                <div className="col">
                  <label>Criteria Name </label>
                </div>
                <div className="col">
                  <label>25</label>
                </div>
                <div className="col-2">
                  <input type="number" className="form-control" />
                </div>
              </div>

              <div className="form-group row mb-4 criteria_row">
                <div className="col">
                  <label>Criteria Name </label>
                </div>
                <div className="col">
                  <label>25</label>
                </div>
                <div className="col-2">
                  <input type="number" className="form-control" />
                </div>
              </div>

              <div className="form-group row mb-4 criteria_row">
                <div className="col">
                  <label>Criteria Name </label>
                </div>
                <div className="col">
                  <label>25</label>
                </div>
                <div className="col-2">
                  <input type="number" className="form-control" />
                </div>
              </div>

              <div className="form-group row mb-4 criteria_row">
                <div className="col">
                  <label>Criteria Name </label>
                </div>
                <div className="col">
                  <label>25</label>
                </div>
                <div className="col-2">
                  <input type="number" className="form-control" />
                </div>
              </div>

              <div className="form-group row mb-4 criteria_row ">
                <div className="col">
                  <label>Criteria Name Criteria Name </label>
                </div>
                <div className="col">
                  <label>25</label>
                </div>
                <div className="col-2">
                  <input type="number" className="form-control" />
                </div>
              </div>
            </div>
          </ul>
          {/* Total marks */}
          <div className="form-group row mb-4 criteria_row ps-5 fw-bold fs-4">
            <div className="col">
              <label>Total Marks </label>
            </div>
            <div className="col">
              <label></label>
            </div>
            <div className="col-3 ps-4">
              <label>100</label>
            </div>
          </div>
          <button type="submit" className="btn btn-success btn_submit mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
