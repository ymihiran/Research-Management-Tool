import React, { useState } from "react";
import axios from "axios";
import { ClassNames } from "@emotion/react";
import "./CSS/st.css";
import "./CSS/link.css";

export default function DownloadTemplate() {
  //   const [type, setTypes] = useState([]);

  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:8070/template")
  //       .then((res) => {
  //         setTypes(res.data);
  //         console.log(res.data);
  //       })
  //       .catch((err) => {
  //         alert(err.message);
  //       });
  //   }, []);

  //   const setData = (data) => {
  //     let { AdminName, SchemaType, Title, Template, Description } = data;
  //     localStorage.setItem("AdminName", AdminName);
  //     localStorage.setItem("SchemaType", SchemaType);
  //     localStorage.setItem("Title", Title);
  //     localStorage.setItem("Template", Template);
  //     localStorage.setItem("Description", Description);

  //     console.log(data);
  //   };
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
            {/* <div className="t-list-head-container">
              <label className="h-text" style={{ color: "#FF5631" }}>
                {" "}
                RESEARCH PROJECT
              </label>{" "}
              <br className="br1" />
              <label className="h-text"></label>
            </div> */}

            <div
              className="ms-5 mt-3 me-5"
              style={{ backgroundColor: "#C4C4C4", height: "30px" }}
            >
              <h4 className="ms-2">Research Project</h4>
            </div>

            <div className="t-list-tb-container mt-4">
              <div className="mb-3 ">
                <h5>
                  <b>
                    Dear students,<br></br>
                    <label
                      className="mt-2"
                      style={{ backgroundColor: "yellow" }}
                    >
                      Please use this templates for your research project.
                    </label>
                  </b>
                </h5>
              </div>
              <br></br>
              <div className="mb-2" style={{ marginLeft: "15px" }}>
                <label htmlFor="formFile" className="t-form-label">
                  <i class="bi bi-file-earmark-pdf-fill fa-5x"></i>
                  &nbsp;Final Thesis
                </label>
              </div>

              <div className="mb-1 " style={{ marginLeft: "15px" }}>
                <label className="t-form-label">
                  <h6>This is a final thesis document you have to submit</h6>
                </label>
              </div>
            </div>

            <div style={{ marginLeft: "125px" }}>
              <button
                type="submit"
                className="bi bi-file-earmark-arrow-down-fill fa-5x btn pb-4"
                style={{
                  backgroundColor: "#0F0934",
                  color: "white",
                  width: "125px",
                  height: "30px",
                }}
              >
                Download
              </button>
            </div>

            <div style={{ marginLeft: "125px" }}>
              <a href="/">
                <i>Click here to submit</i>
              </a>
            </div>
            <div className="bottom-t-container">
              <label className="bottom-t" style={{ color: "#FF5631" }}>
                {" "}
                SLIIT
              </label>{" "}
              <label className="bottom-t"> Research</label> <br />
              <label className="bottom-t"> Management Tool</label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
