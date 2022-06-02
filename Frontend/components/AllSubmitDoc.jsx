import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CSS/st.css";
import "./CSS/stgrup.css";

export default function AllSubmitDoc() {
  return (
    <div>
      <form>
        <div className="t-list-container">
          <div style={{ backgroundColor: "#0F0934" }}>
            <div>
              <img
                className="img-side"
                src="https://res.cloudinary.com/sliit-yasantha/image/upload/v1653068950/logo11_ggebb3.png"
              ></img>
            </div>
          </div>
          <div className="mt-3" style={{ backgroundColor: "white" }}>
            <div
              className="ms-5 mt-3 me-5"
              style={{ backgroundColor: "#C4C4C4", height: "30px" }}
            >
              <h4 className="ms-2">General</h4>
            </div>
            <div className="mt-4 ms-5 me-5">
              <h5>
                <b>Submission Status</b>
              </h5>
            </div>

            <table class="table">
              <tbody>
                <tr>
                  <td scope="col" style={{ backgroundColor: "red" }}>
                    #
                  </td>
                  <td scope="col" style={{ backgroundColor: "blue" }}>
                    First
                  </td>
                </tr>
                <tr>
                  <td scope="col" style={{ backgroundColor: "red" }}>
                    #
                  </td>
                  <td scope="col" style={{ backgroundColor: "blue" }}>
                    First
                  </td>
                </tr>
                <tr>
                  <td scope="col" style={{ backgroundColor: "red" }}>
                    #
                  </td>
                  <td scope="col" style={{ backgroundColor: "blue" }}>
                    First
                  </td>
                </tr>
                <tr>
                  <td scope="col" style={{ backgroundColor: "red" }}>
                    #
                  </td>
                  <td scope="col" style={{ backgroundColor: "blue" }}>
                    First
                  </td>
                </tr>
                <tr>
                  <td scope="col" style={{ backgroundColor: "red" }}>
                    #
                  </td>
                  <td scope="col" style={{ backgroundColor: "blue" }}>
                    First
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </form>
    </div>
  );
}
