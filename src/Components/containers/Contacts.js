import React from "react";
import "../../css/containers/Contacts.css";
import SearchIcon from "@mui/icons-material/Search";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import Contact from "../Contact";
import contacts from "../../data/contacts.json";

export default function Contacts() {
  console.log(contacts);
  return (
    <div className="contacts">
      <header className="contacts__header">
        <div className="contacts__searchbar">
          {/* Filter Contacts List */}
          <SearchIcon sx={{ marginRight: "5px" }} />
          <input placeholder="Search" />
        </div>
        <CreateRoundedIcon
          sx={{
            color: "#c7c7cc",
            padding: "5px",
            borderRadius: "50%",
            backgroundColor: "#fff"
          }}
        />
      </header>
      {/* column of contact components */}
      <div className="contacts__column">
        {/* contact components rendered here */}
        {contacts.map((contact) => {
          return (
            <Contact
              contactName={contact.contactName}
              message={contact.message}
              timestamp={contact.timestamp}
              key={contact.id}
            />
          );
        })}
      </div>
    </div>
  );
}
