import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import axios from "axios";
import SendIcon from "@mui/icons-material/Send";

export default function RequestCoSupervisor() {
  const theme = useTheme();

  const [groupID, setGroupID] = useState();
  const [topic, setTopic] = useState();
  const [researchField, setResearchField] = useState();
  const [coSupervisor, setCoSupervisor] = useState();

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
        setCoSupervisor(res.data);
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
            <div className="criteria_box mb-5">
              <table className="table-hover ms-4">
                <thead>
                  <tr>
                    <th scope="col" className="col">
                      No
                    </th>
                    <th scope="col" className="col-2 ps-5">
                      Name
                    </th>
                    <th scope="col" className="col ms-5">
                      <center>Email</center>
                    </th>
                    <th scope="col-1" className="col-5"></th>
                  </tr>
                </thead>

                <tbody>
                  {coSupervisor?.map((data, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td className=" ps-5"> {data.name}</td>
                      <td className="">{data.email}</td>
                      <td>
                        <center>
                          <div className="col-3 ms-5 ">
                            <a
                              type="number"
                              min="0"
                              max="25"
                              className="form-control "
                            >
                              <div className="ps-2">
                                <SendIcon fontSize="large" />
                              </div>
                            </a>
                          </div>
                        </center>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ul>
        </form>
      </div>
    </div>
  );
}
