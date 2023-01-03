import { useState } from "react";
import "../../css/containers/Messenger.css";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";

export default function Messenger() {
  const [messageInput, setMessageInput] = useState("");
  const currentContact = useSelector((state) => state.contacts.selectedContact);

  return (
    <div className="messenger">
      <div className="messenger__header">
        <Avatar
          src={currentContact.contactPic}
          alt={currentContact.contactName}
          sx={{ marginRight: 1 }}
        />
        <h3>{currentContact && currentContact.contactName}</h3>
      </div>
      {/* container for messages */}
      <div className="messenger__messages"></div>
      {/* input fixed to the bottom of the container */}
      <div className="messenger__input">
        <input
          placeholder="Send Message..."
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        />
        <ArrowUpwardRoundedIcon sx={{ color: "#047afd", cursor: "pointer" }} />
      </div>
    </div>
  );
}
