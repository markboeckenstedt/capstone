import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "./Modal";

export function ContactsIndex({ contacts }) {
  const [selectedContact, setSelectedContact] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (contact) => {
    setSelectedContact(contact);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedContact(null);
  };

  return (
    <div>
      <h1>All Contacts</h1>
      {contacts.map((contact) => (
        <div key={contact.id}>
          <h2>{contact.first_name} {contact.last_name}</h2>
          <p>
            <Link to={`/companies/${contact.company.id}`}>{contact.company.name}</Link>
          </p>
          <button onClick={() => handleOpenModal(contact)}>Contact Info</button>
        </div>
      ))}

      <Modal show={showModal} onClose={handleCloseModal}>
        {selectedContact && (
          <div>
            <h2>{selectedContact.first_name} {selectedContact.last_name}</h2>
            <p>{selectedContact.email}</p>
            <p>{selectedContact.phone_number}</p>
          </div>
        )}
      </Modal>
    </div>
  );
}
