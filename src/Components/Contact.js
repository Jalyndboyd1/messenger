import { Avatar } from "@mui/material";
import "../css/Contact.css";
import { changeContact } from "../reducers/contacts";
import { useDispatch, useSelector } from "react-redux";

export default function Contact({
  contactPic = '',
  contactName,
  message,
}) {
  const currentContact = useSelector((state) => state.contacts.selectedContact);
  const dispatch = useDispatch();

  return (
    <div
      className="contact"
      onClick={() =>
        dispatch(
          changeContact({
            contactPic,
            contactName,
            id: Math.floor(Math.random()),
            messages: [],
          })
        )
      }
    >
      <Avatar src={contactPic} alt={contactName} sx={{ marginRight: 2 }} />
      <div className="contact__details">
        <h4>{contactName}</h4>
        <p>{message}</p>
      </div>
      <p className="contact__timestamp">{""}</p>
    </div>
  );
}
