import "./CSS/topicsub.css";
import "./CSS/btrap.css";

import Featured from "./Featured";

export default function Main(){

    return (
      <div className="main-m-container">
        <div className="main-item-con">
          
        </div>
        <div style={{backgroundColor:"white",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}}>
          <Featured />
          <div className="main-side-container">
            <div className="main-side-sub-container">
              <center>
                  <label className="main-t-lbl"> <label style={{color:"#FF5631"}}>Quick</label>  Links</label>
                </center>  
                <center>
                <button className="btn l-btn-accepted main-side-button">Register Group</button> <br/>
                <button className="btn l-btn-accepted main-side-button">Register Topic</button> <br/>
                <button className="btn l-btn-accepted main-side-button">Submit Document</button> <br/>
                <button className="btn l-btn-accepted main-side-button">Ask Question</button>
                <button className="btn l-btn-accepted main-side-button2">My Profile</button>
                <label>Have a question? write us to info@sliil.lk</label>
                </center>
            </div>
          </div>
        </div>  
        <div style={{backgroundColor:"#84809F"}}></div>  
      </div>
      );

} 