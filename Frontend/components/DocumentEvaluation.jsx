import React from "react";
import "./Styles/styles.css";

export default function DocumentEvaluation() {
  return (
    <div className="body_container">
      {/*left side column */}
      <div className="left_container">
        <h1 className="mb-5 fw-bold">
          Document <br></br> Evaluation
        </h1>
        <form>
          <div className="form-group mb-3">
            <label>Group ID</label>
            <input type="text" disabled className="form-control" id="groupID" />
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
            <label>Example textarea</label>
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
            <div className="criteria_box mb-5 fw-bold">
              <div className="form-group row mb-4 criteria_row">
                <div className="col ">
                  <label>Criteria Name </label>
                </div>
                <div className="col">
                  <label>25</label>
                </div>
                <div className="col-3">
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
                <div className="col-3">
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
                <div className="col-3">
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
                <div className="col-3">
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
                <div className="col-3">
                  <input type="number" className="form-control" />
                </div>
              </div>

              <div className="form-group row mb-4 criteria_row ">
                <div className="col">
                  <label>Criteria Name </label>
                </div>
                <div className="col">
                  <label>25</label>
                </div>
                <div className="col-3">
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
