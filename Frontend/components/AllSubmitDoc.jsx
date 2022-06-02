import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CSS/st.css";
import "./CSS/stgrup.css";

export default function AllSubmitDoc() {
  const [type, setTypes] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8070/template")
      .then((res) => {
        setTypes(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  const setData = (data) => {
    let { AdminName, SchemaType, Title, Template, Description } = data;
    localStorage.setItem("AdminName", AdminName);
    localStorage.setItem("SchemaType", SchemaType);
    localStorage.setItem("Title", Title);
    localStorage.setItem("Template", Template);
    localStorage.setItem("Description", Description);

    console.log(data);
  };

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

            <div
              className="container mt-5 "
              //   style={{ marginLeft: "30px", marginRight: "50px" }}
            >
              <table class="table table-striped">
                <tbody>
                  <tr>
                    <td scope="col">
                      <b>Group ID</b>
                    </td>
                    <td scope="col">First</td>
                  </tr>
                  <tr>
                    <td scope="col">
                      <b>Status</b>
                    </td>
                    <td scope="col">First</td>
                  </tr>
                  <tr>
                    <td scope="col">
                      <b>Last modified</b>
                    </td>
                    <td scope="col">First</td>
                  </tr>
                  <tr>
                    <td scope="col">
                      <b>Submission Comments</b>
                    </td>
                    <td scope="col">First</td>
                  </tr>
                  <tr>
                    <td scope="col">
                      <b>Feedback</b>
                    </td>
                    <td scope="col">First</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
