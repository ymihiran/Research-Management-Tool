import React, { useState } from "react";
import axios from "axios";
import { ClassNames } from "@emotion/react";
import "./CSS/st.css";

export default function UploadTemplate() {
  return (
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

        <div className="t-list-tb-container">
          <div className="mb-3">
            <label className="t-form-label">
              <b>Admin Name:</b>
            </label>
            <input
              type="text"
              style={{ width: "450px" }}
              id="cName"
              onChange={(e) => {
                setvgroupName(e.target.value);
              }}
            />
          </div>

          <div className="mb-3">
            <label className="t-form-label">
              <b>Document/Presentation Title:</b>
            </label>
            <input
              type="text"
              style={{ width: "450px" }}
              id="cName"
              onChange={(e) => {
                setvgroupName(e.target.value);
              }}
            />
          </div>

          <div class="mb-3">
            <label for="formFile" className="t-form-label">
              <b>Upload Template/Document</b>
            </label>
            <div class="col-sm-4">
              <input
                className="form-control"
                style={{ width: "450px" }}
                type="file"
                accept="image/png, image/jpeg"
                id="image"
              />
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
              onChange={(e) => {
                setacomment(e.target.value);
              }}
            />
          </div>
          <br></br>

          <button
            type="submit"
            className="btn btn-primary"
            style={{
              backgroundColor: "#0F0934",
              width: "200px",
              fontWeight: "bold",
            }}
          >
            UPLOAD
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
  );
}
