import { useEffect, useState } from "react";
import { ArrowUpwardRounded } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { handleMessage } from "../../reducers/contacts";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase/config";

export default function Messages() {
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState([]);

  const currentContact = useSelector((state) => state.contacts.selectedContact);
  const dispatch = useDispatch();

  function handleSend(e) {
    e.preventDefault();
    let currentDate = new Date(Date.now());
    dispatch(
      handleMessage({
        messageInput,
        timestamp: `${currentDate.getHours()}:${currentDate.getMinutes()}`,
        sentByUser: true
      })
    );
    setMessageInput("");
  }

  useEffect(()=>{
    async function fetchUpdatingMessages(){
      const querySnapshot = await getDocs(collection(firestore, "contacts"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${JSON.stringify(doc.data().messages)}`);
        setMessages([...doc.data().messages, messageInput])
      });
    }

    fetchUpdatingMessages()
    return () => console.log()
  },[])


  return (
    <div className="messenger__messages">
      {!currentContact.contactName ? (
        <div className="select-contact-message">
          Select a contact to begin chatting!
        </div>
      ) : (
        <div>
          <div className="messenger__messagesContainer">
            {messages.map((message) => {
              /* if message is 'sentByUser' will have one className if not then another */
              return message.sentByUser ? (
                <p className="messenger__message" key={Math.random()}>
                  {message.message}
                </p>
              ) : (
                <p>{message.messageInput}</p>
              );
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
