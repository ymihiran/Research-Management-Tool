import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import axios from "axios";

export default function RequestCoSupervisor() {
  const theme = useTheme();

  const [groupID, setGroupID] = useState();
  const [topic, setTopic] = useState();
  const [researchField, setResearchField] = useState();

  useEffect(() => {
    setGroupID(localStorage.getItem("groupID"));
    setTopic(localStorage.getItem("rTopic"));
    setResearchField(localStorage.getItem("rField"));

    axios
      .get(
        `http://localhost:8070/supervisor/co/${localStorage.getItem(
          "rField"
        )}/${"Co-Supervisor"}`
      )
      .then((res) => {
        console.log(res.data);
      });
  }, []);

  return (
    <div className="body_container">
      {/*left side column */}
      <div className="left_container">
        <div>
          <label className="h-text text_space" style={{ color: "#FF5631" }}>
            REQUEST
          </label>
          <br />
          <label className="h-text mb-5" style={{ color: "#ffffff" }}>
            CO-SUPERVISOR
          </label>
        </div>
        <form className=" pe-5">
          <div className="form-group mb-3 mt-5">
            <label>Group ID</label>
            <input
              type="text"
              value={groupID}
              disabled
              className="form-control"
              id="groupID"
            />
          </div>

          <div className="form-group mb-3">
            <label>Research Topic</label>
            <input
              type="text"
              value={topic}
              disabled
              className="form-control"
              id="researchTopic"
            />
          </div>
          <div className=" mb-5 ">
            <label>Research Field</label>
            <input
              type="text"
              value={researchField}
              disabled
              className="form-control"
              id="researchTopic"
            />
          </div>
          <button type="submit" className="btn btn-success ">
            Find Co-Supervisor
          </button>
        </form>
      </div>

      {/*right side column */}
      <div className="right_container">
        <form>
          <ul className="list-group">
            <div className="criteria_box mb-5 fw-bold">
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
          <button type="submit" className="btn btn-success btn_submit mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
