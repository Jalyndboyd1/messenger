import { Avatar } from "@mui/material";
import "../../css/containers/Messenger.css";

export default function MessengerHeader({ contactPic, contactName }) {
  return (
    <div>
      {contactName && (
        <div className="messenger__header">
          <Avatar
            src={contactPic}
            sx={{ marginRight: 1, height: "30px", width: "30px" }}
          />
          <h4>{contactName}</h4>
        </div>
      )}
    </div>
  );
}
