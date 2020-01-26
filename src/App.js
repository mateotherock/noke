import React, { useState } from 'react';
import './App.css';
import contacts from "./users.js";
import ContactDetail from "./ContactDetail/ContactDetail";

function App() {
  const [contact, setContact] = useState(contacts.People[0]);
  return (
    <div className="contact-list-detail">
      <div className="contact-list">
        {contacts.People.map((c, i) =>
          <div key={i} className={(c === contact) ? "selected-list-item contact-list-item" : "contact-list-item"} onClick={() => setContact(c)}>
            <div className="image-container">
              <img className="contact-list-item-pic" src={c.Picture} alt="Contact Headshot"></img>
            </div>
            <div>
              <div className="contact-list-item-name">{c.Name}</div>
              <div className="contact-list-item-title">{c.Title}</div>
            </div>
          </div>
        )}
      </div>
      <div className="contact-detail">
        <ContactDetail contactToDisplay={contact}></ContactDetail>
      </div>
    </div>
  );
}

export default App;
