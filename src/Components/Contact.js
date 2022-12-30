import { Avatar } from "@mui/material";
import "../css/Contact.css";
import { changeContact } from "../reducers/contacts";
import { useDispatch } from "react-redux";

export default function Contact({
  contactPic = '',
  contactName,
  message,
  timestamp
}) {
  const dispatch = useDispatch();
  // Fetch Messages and add messages to dispatched object
  return (
    <div
      className="contact"
      onClick={() =>
        dispatch(
          changeContact({
            contactPic,
            contactName,
            timestamp
          })
        )
      }
    >
      <Avatar src={contactPic} alt={contactName} sx={{ marginRight: 2 }} />
      <div className="contact__details">
        <h4>{contactName}</h4>
        <p>{message}</p>
      </div>
      <p className="contact__timestamp">{timestamp}</p>
    </div>
  );
}
