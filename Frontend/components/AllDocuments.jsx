import axios from "axios";
import React from "react";
import "./Styles/styles.css";

export default function AllDocuments() {
  // useEffect(() => {
  //   axios.get()

  // }, []);

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
              <tr>
                <th scope="col">Group ID</th>
                <th scope="col">Research Field</th>
                <th scope="col">Comment</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>
                  <button
                    type="submit"
                    className="btn btn-success "
                    style={{ backgroundColor: "#84809f" }}
                  >
                    Evaluate
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>
                  <button
                    type="submit"
                    className="btn btn-success "
                    style={{ backgroundColor: "#0f0934" }}
                  >
                    Evaluate
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          {/* <div className="form-group row mb-4 criteria_row">
                <div className="col ">
                  <label>Criteria Name </label>
                </div>
                <div className="col">
                  <label>25</label>
                </div>
                <div className="col-2">
                  <button
                    type="submit"
                    className="btn btn-success "
                    style={{ backgroundColor: "#0f0934" }}
                  >
                    Evaluate
                  </button>
                </div>
              </div> */}
        </div>
      </div>
    </div>
  );
}
