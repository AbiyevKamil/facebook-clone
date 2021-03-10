import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "../styles/MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

function MessageSender() {
  const [input, setInput] = useState("");
  const [inputURL, setInputURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={"message-sender"}>
      <div className="message-sender-top">
        <Avatar src={""} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="message-sender-input"
            placeholder={`What's on your mind, ${""}?`}
          />
          <input
            value={inputURL}
            onChange={(e) => setInputURL(e.target.value)}
            type="text"
            placeholder="Image URL (Optional)"
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Button
          </button>
        </form>
      </div>
      <div className="message-sender-bottom">
        <div className="message-sender-option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="message-sender-option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="message-sender-option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
