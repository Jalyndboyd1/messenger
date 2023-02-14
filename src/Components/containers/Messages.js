import { useState } from "react";
import { ArrowUpwardRounded } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { handleMessage } from "../../reducers/contacts";

export default function Messages() {
  const [messageInput, setMessageInput] = useState("");

  const currentContact = useSelector((state) => state.contacts.selectedContact);
  const dispatch = useDispatch()

  function handleSend(e) {
    e.preventDefault();
    let currentDate = new Date(Date.now())
    dispatch(handleMessage({
      messageInput,
      timestamp: `${currentDate.getHours()}:${currentDate.getMinutes()}`,
      sentByUser: true
    }))
    setMessageInput("")
  }

  return (
    <div className="messenger__messages">
      {!currentContact.contactName ? (
        <div className="select-contact-message">
          Select a contact to begin chatting!
        </div>
      ) : (
        <div>
          <div className="messenger__messagesContainer">
            {currentContact.messages.map((message) => {
              /* if message is 'sentByUser' will have one className if not then another */
                return message.sentByUser? <p className="messenger__message" key={Math.random()}>{message.messageInput}</p>: <p>{message.messageInput}</p>
            })}
          </div>
          <div className="messenger__inputContainer">
            <div className="messenger__input">
              <input
                placeholder="Send Message..."
                onChange={(e) => setMessageInput(e.target.value)}
                value={messageInput}
              />
              <Button onClick={handleSend} disabled={!messageInput.length}>
                <ArrowUpwardRounded sx={{ color: "#047afd" }} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
