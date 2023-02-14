import "../../css/containers/Messenger.css";
import MessengerHeader from "./MessengerHeader";
import Messages from "./Messages";
import { useSelector } from "react-redux";

export default function Messenger() {
  const currentContact = useSelector((state) => state.contacts.selectedContact);

  return (
    <div className="messenger">
      <MessengerHeader
        contactName={currentContact.contactName}
        contactPic={currentContact.contactPic}
      />
      <div className="messenger__messages">
        <Messages/>
      </div>
    </div>
  );
}
