import React, { useState, useEffect } from "react";
import axios from "axios";
import { ClassNames } from "@emotion/react";
import "./CSS/st.css";
import FileInput from "./FileInput";

export default function UpdateUploadTemplate() {
  //file upload
  const [data, setData] = useState({
    name: "upload",
    Template: "",
    AdminName: "",
    SchemaType: "",
    Title: "",
    Description: "",
    _id: "",
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
      const url = process.env.REACT_APP_API_URL + "template";
      const { data: res } = await axios.post(url, data);
      console.log(res);
      console.log(data);

      alert("Update New Template Successfully");
      e.target.reset(); // to clear input fiels after submission
    } catch (error) {
      console.log(error);
    }
  };

  // const [AdminName, setAdminName] = useState();
  // const [SchemaType, setSchemaType] = useState();
  // const [Title, setTitle] = useState();
  // const [Template, setTemplate] = useState();
  // const [Description, setDescription] = useState();

  // const [_id, setID] = useState(null);

  useEffect(() => {
    // setID(localStorage.getItem("ID"));
    // setAdminName(localStorage.getItem("AdminName"));
    // setSchemaType(localStorage.getItem("SchemaType"));
    // setTitle(localStorage.getItem("Title"));
    // setTemplate(localStorage.getItem("Template"));
    // setDescription(localStorage.getItem("Description"));

    setData({ ...data, [data.AdminName]: localStorage.getItem("AdminName") });
    // setData({ SchemaType: localStorage.getItem("SchemaType") });
    // setData({ Title: localStorage.getItem("Title") });
    // setData({ Template: localStorage.getItem("Template") });
    setData({
      ...data,
      [data.Description]: localStorage.getItem("Description"),
    });
    // setData({ _id: localStorage.getItem("_id") });
    console.log("admin name: ", data.AdminName);
  }, []);

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
                UPLOAD
              </label>{" "}
              <br className="br1" />
              <label className="h-text">Document/Presentation Template</label>
            </div>

            <div className="t-list-tb-container mt-2">
              <div className="mb-3">
                <label className="t-form-label">
                  <b>Admin Name:</b>
                </label>
                {console.log(data.AdminName)}
                <input
                  type="text"
                  style={{ width: "450px" }}
                  id="cName"
                  required
                  name="AdminName"
                  value={data.AdminName}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3 ">
                <label className="t-form-label">
                  <b>Schema Type:</b>
                </label>

                <select
                  className="form-control m-select"
                  id="Field"
                  style={{
                    fontSize: "1rem",
                    width: "450px",
                    border: "2px solid #ced4da",
                    height: "40px",
                  }}
                  name="SchemaType"
                  value={data.SchemaType}
                  onChange={handleChange}
                >
                  <option value="Default">Select one</option>
                  <option value="Proposal Presentation">
                    Proposal Presentation
                  </option>
                  <option value="Progress Presentation">
                    Progress Presentation
                  </option>
                  <option value="Final Presentation">Final Presentation</option>
                  <option value="Chater Documentation">
                    Chater Documentation
                  </option>
                  <option value="Scrum Documentation">
                    Scrum Documentation
                  </option>
                  <option value="Proposal Documentation">
                    Proposal Documentation
                  </option>
                  <option value="Progress Documentation">
                    Progress Documentation
                  </option>
                  <option value="Final Documentation">
                    Final Documentation
                  </option>
                </select>
              </div>

              <div className="mb-3">
                <label className="t-form-label">
                  <b>Document/Presentation Title:</b>
                </label>
                <input
                  type="text"
                  style={{ width: "450px" }}
                  id="cName"
                  required
                  name="Title"
                  value={data.Title}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3"></div>

              <div className="mb-3">
                <label htmlFor="formFile" className="t-form-label">
                  <b>Upload Template/Document</b>
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
                  <b>Description about the Template/Document:</b>
                </label>
                <input
                  type="text"
                  style={{ width: "450px", height: "100px" }}
                  id="cName"
                  name="Description"
                  value={data.Description}
                  onChange={handleChange}
                />
              </div>
              <br></br>

              <button
                type="submit"
                className="btn btn-primary mb-5"
                style={{
                  backgroundColor: "#0F0934",
                  width: "200px",
                  fontWeight: "bold",
                  marginLeft: "50%",
                }}
              >
                UPLOAD
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="bottom-t-container " style={{ marginBottom: "-6em" }}>
        <label className="bottom-t" style={{ color: "#FF5631" }}>
          {" "}
          SLIIT
        </label>{" "}
        <label className="bottom-t"> Research</label> <br />
        <label className="bottom-t"> Management Tool</label>
      </div>
    </div>
  );
}
