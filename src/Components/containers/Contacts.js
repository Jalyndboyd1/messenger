import { useState, useEffect } from "react";
import "../../css/containers/Contacts.css";
import SearchIcon from "@mui/icons-material/Search";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import Contact from "../Contact";
import contacts from "../../data/contacts.json";

export default function Contacts() {
  const [searchInput, setSearchInput] = useState("");
  const [filteredContacts, setSearchInputs] = useState([]);

  useEffect(() => {
    if (searchInput) {
      const filtered = contacts.filter((contact) => {
        return contact.contactName.includes(searchInput);
      });
      setSearchInputs(filtered);
    }
  }, [searchInput]);

  return (
    <div className="contacts">
      <header className="contacts__header">
        <div className="contacts__searchbar">
          {/* Filter Contacts List */}
          <SearchIcon sx={{ marginRight: "5px" }} />
          <input
            placeholder="Search"
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
          />
        </div>
        <CreateRoundedIcon
          sx={{
            color: "#c7c7cc",
            padding: "5px",
            borderRadius: "50%",
            backgroundColor: "#fff",
            cursor: "pointer"
          }}
        />
      </header>
      {/* column of contact components */}
      <div className="contacts__column">
        {/* contact components rendered here */}
        {searchInput
          ? filteredContacts.map((contact) => {
              return (
                <Contact
                  contactName={contact.contactName}
                  message={contact.message}
                  timestamp={contact.timestamp}
                  key={contact.id}
                />
              );
            })
          : contacts.map((contact) => {
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
