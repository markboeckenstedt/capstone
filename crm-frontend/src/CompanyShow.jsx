import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Modal } from "./Modal";
import { ContactsNew } from "./ContactsNew";
import { ActivitiesNew } from "./ActivitiesNew";

export function CompanyShow() {
  const { id } = useParams();
  const [company, setCompany] = useState(null);
  const [contacts, setContacts] = useState([]);
  const [activities, setActivities] = useState([]);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showActivityModal, setShowActivityModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null); // Track selected contact for the info modal
  const [showContactInfoModal, setShowContactInfoModal] = useState(false); // Control contact info modal

  // Fetch company data along with contacts and activities
  const handleShow = () => {
    axios.get(`http://localhost:3000/companies/${id}.json`).then((response) => {
      setCompany(response.data);
      setContacts(response.data.contacts || []);
      setActivities(response.data.activities || []);
    }).catch((error) => {
      console.error("Error fetching company data", error);
    });
  };

  useEffect(handleShow, [id]);

  if (!company) return <div>Loading...</div>;

  // Functions to handle modals for adding contacts and activities
  const handleOpenContactModal = () => setShowContactModal(true);
  const handleCloseContactModal = () => setShowContactModal(false);
  const handleOpenActivityModal = () => setShowActivityModal(true);
  const handleCloseActivityModal = () => setShowActivityModal(false);

  // Functions to handle showing and closing the contact info modal
  const handleOpenContactInfoModal = (contact) => {
    setSelectedContact(contact); // Set the selected contact for the info modal
    setShowContactInfoModal(true); // Show the contact info modal
  };
  const handleCloseContactInfoModal = () => {
    setShowContactInfoModal(false); // Close the contact info modal
    setSelectedContact(null); // Reset the selected contact
  };

  // Handle creating a new contact and refetch data
  const handleCreateContact = (params, successCallback) => {
    axios.post("http://localhost:3000/contacts.json", params).then((response) => {
      setContacts([...contacts, response.data]);
      successCallback();
      handleShow(); // Refetch data after creating the contact
    }).catch((error) => {
      console.error("Error creating contact", error);
    });
  };

  // Handle creating a new activity
  const handleCreateActivity = (params, successCallback) => {
    axios.post("http://localhost:3000/activities.json", params).then((response) => {
      setActivities([...activities, response.data]);
      successCallback();
    }).catch((error) => {
      console.error("Error creating activity", error);
    });
  };

  return (
    <div>
      <h1>{company.name}</h1>
      <p>{company.website}</p>

      <h2>Contacts</h2>
      <button onClick={handleOpenContactModal}>Add Contact</button>
      {contacts.map((contact) => (
        <div key={contact.id}>
          {contact.first_name} {contact.last_name}
          <button onClick={() => handleOpenContactInfoModal(contact)}>
            View Contact Info
          </button>
        </div>
      ))}

      <h2>Activities</h2>
      {activities.map((activity) => (
        <div key={activity.id}>{activity.communication_type}: {activity.notes}</div>
      ))}
      <button onClick={handleOpenActivityModal}>Add Activity</button>

      {/* Modal for adding a new contact */}
      <Modal show={showContactModal} onClose={handleCloseContactModal}>
        <ContactsNew onCreate={handleCreateContact} companyId={company.id} />
      </Modal>

      {/* Modal for adding a new activity */}
      <Modal show={showActivityModal} onClose={handleCloseActivityModal}>
        <ActivitiesNew onCreate={handleCreateActivity} contactId={selectedContact?.id} />
      </Modal>

      {/* Modal for viewing contact info */}
      <Modal show={showContactInfoModal} onClose={handleCloseContactInfoModal}>
        {selectedContact ? (
          <div>
            <h2>{selectedContact.first_name} {selectedContact.last_name}</h2>
            <p>Email: {selectedContact.email}</p>
            <p>Phone: {selectedContact.phone_number}</p>
          </div>
        ) : (
          <div>Loading...</div> // Placeholder or loading state
        )}
      </Modal>
    </div>
  );
}