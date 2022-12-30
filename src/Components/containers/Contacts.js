import React from "react";
import "../../css/containers/Contacts.css";
import SearchIcon from "@mui/icons-material/Search";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";

export default function Contacts() {
  return (
    <div className="contacts">
      <header className="contacts__header">
        <div className="contacts__searchbar">
          {/* Filter Contacts List */}
          <SearchIcon />
          <input placeholder="Search" />
        </div>
        <CreateRoundedIcon
          sx={{
            color: "#c7c7cc"
          }}
        />
      </header>
      {/* column of contact components */}
      <div className="contacts__column">
        {/* contact components rendered here */}
      </div>
    </div>
  );
}
