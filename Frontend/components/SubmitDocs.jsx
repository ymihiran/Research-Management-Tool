import React, { useState } from "react";
import axios from "axios";
import { ClassNames } from "@emotion/react";
import "./CSS/st.css";
import FileInput from "./FileInput";

export default function SubmitDocs() {
  //file upload
  const [data, setData] = useState({
    name: "upload",
    GroupID: "",
    ResearchField: "",
    Template: "",
    Comment: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleInputState = (name, value) => {
    setData((prev) => ({ ...prev, [name]: value }));
    console.log("21 ", data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = process.env.REACT_APP_API_URL + "document";
      const { data: res } = await axios.post(url, data);
      console.log(res);
      console.log(data);

      alert("Successfully");
      e.target.reset(); // to clear input fiels after submission
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="t-list-container">
          <div style={{ backgroundColor: "#0F0934" }}>
            <div>
              <img
                className="img-side"
                src="https://res.cloudinary.com/sliit-yasantha/image/upload/v1653068950/logo11_ggebb3.png"
              ></img>
            </div>
          </div>
          <div style={{ backgroundColor: "white" }}>
            <div className="t-list-head-container">
              <label className="h-text" style={{ color: "#FF5631" }}>
                {" "}
                Template
              </label>{" "}
              <br className="br1" />
              <label className="h-text">SUBMISSION</label>
            </div>

            <div className="t-list-tb-container mt-3">
              <div className="mb-3">
                <label className="t-form-label">
                  <b>Group ID :</b>
                </label>
                <input
                  type="text"
                  style={{ width: "450px" }}
                  id="cName"
                  required
                  name="GroupID"
                  onChange={handleChange}
                  value={data.GroupID}
                />
              </div>

              <div className="mb-3">
                <label className="t-form-label">
                  <b>Research Field:</b>
                </label>

                <select
                  className="form-control"
                  name="ResearchField"
                  id="Field"
                  style={{ width: "450px", border: "2px solid #ced4da" }}
                  required
                  onChange={handleChange}
                  value={data.ResearchField}
                >
                  <option value="Default">Select one</option>
                  <option value="Artificial Interligance">
                    Artificial Interligance
                  </option>
                  <option value="Machine Learning">Machine Learning</option>
                  <option value="Games">Games</option>
                  <option value="Robotics">Robotics</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="formFile" className="t-form-label">
                  <b>Upload TeTemplate</b>
                </label>
                <div style={{ width: "470px" }}>
                  <FileInput
                    name="song"
                    label="Choose File"
                    handleInputState={handleInputState}
                    type="file"
                    value={data.song}
                  />
                </div>
                <div className="col-sm-4">
                  <br></br>
                </div>
              </div>

              <div className="mb-3">
                <label className="t-form-label">
                  <b>Comments:</b>
                </label>
                <input
                  type="text"
                  style={{ width: "450px", height: "100px" }}
                  id="cName"
                  name="Comment"
                  onChange={handleChange}
                  value={data.Comment}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  backgroundColor: "#0F0934",
                  width: "200px",
                  fontWeight: "bold",
                  marginLeft: "50%",
                }}
              >
                SUBMIT
              </button>
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
