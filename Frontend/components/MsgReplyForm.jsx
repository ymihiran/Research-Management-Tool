import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Styles/styles.css";
import { useHistory } from "react-router";

export default function MsgReplyForm() {
  const [message, setMessage] = useState();
  const [messageID, setMessageID] = useState();
  const [userSup, setUserSup] = useState();
  const history = useHistory();

  useEffect(() => {
    setMessageID(localStorage.getItem("Message_ID"));
    setUserSup(JSON.parse(localStorage.getItem("user")).name);
  }, []);

  const handelSendReply = async (e) => {
    e.preventDefault();
    console.log(message, messageID);

    await axios
      .post(`http://localhost:8070/chatReplies`, {
        userSup,
        messageID,
        message,
      })
      .then((res) => {
        console.log(res);
        history.push("/chatGroup");
      })
      .catch((err) => {
        alert(err);
      });
  };

  const handelCancel = () => {
    history.push("/chatGroup");
  };

  return (
    <div className="reply_body_container">
      {/*left side column */}
      <div className="left_container">
        <div>
          <label className="h-text text_space" style={{ color: "#FF5631" }}>
            CHAT
          </label>
          <br />
          <label className="h-text ms-5" style={{ color: "#ffffff" }}>
            REPLY
          </label>
        </div>
      </div>

      {/*right side column */}
      <div className="right_container">
        <div className="reply_criteria_box mb-4 ">
          <form>
            <div className="form-group mb-3">
              <label>Reply</label>
              <textarea
                className="form-control"
                id="groupMembers"
                rows={4}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                className="btn btn-secondary "
                onClick={handelCancel}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-success "
                onClick={(e) => handelSendReply(e)}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
