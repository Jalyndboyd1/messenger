import { Avatar } from "@mui/material";
import "../css/Contact.css";

export default function Contact({
  contactPic,
  contactName,
  message,
  timestamp
}) {
  return (
    <div className="contact">
      <Avatar src={contactPic} alt={contactName} sx={{ marginRight: 3 }} />
      <div className="contact__details">
        <h4>{contactName}</h4>
        <p>{message}</p>
      </div>
      <p className="contact__timestamp">{timestamp}</p>
    </div>
  );
}
