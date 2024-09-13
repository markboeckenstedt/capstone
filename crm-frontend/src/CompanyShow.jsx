import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Modal } from "./Modal"; // Assuming you have a Modal component
import { ActivitiesNew } from "./ActivitiesNew"; // Assuming ActivitiesNew component exists

export function CompanyShow() {
  const { id } = useParams();
  const [company, setCompany] = useState(null);
  const [contacts, setContacts] = useState([]);
  const [activities, setActivities] = useState([]);
  const [showActivityModal, setShowActivityModal] = useState(false);
  const [showContactInfoModal, setShowContactInfoModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

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

  const handleOpenActivityModal = (contact) => {
    setSelectedContact(contact); 
    setShowActivityModal(true);
  };
  const handleCloseActivityModal = () => {
    setShowActivityModal(false);
    setSelectedContact(null);
  };

  const handleOpenContactInfoModal = (contact) => {
    setSelectedContact(contact);
    setShowContactInfoModal(true);
  };
  const handleCloseContactInfoModal = () => {
    setShowContactInfoModal(false);
    setSelectedContact(null);
  };

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
      {contacts.map((contact) => (
        <div key={contact.id}>
          {contact.first_name} {contact.last_name}
          <button onClick={() => handleOpenContactInfoModal(contact)}>View Contact Info</button>
          <button onClick={() => handleOpenActivityModal(contact)}>Add Activity</button>
        </div>
      ))}

      <h2>Activities</h2>
      {activities.map((activity) => (
        <div key={activity.id}>
          <p>{activity.communication_type}: {activity.notes}</p>
          <p>
            {/* Display the associated contact's name */}
            <strong>Associated Contact:</strong> {activity.contact.first_name} {activity.contact.last_name}
          </p>
        </div>
      ))}

      <Modal show={showActivityModal} onClose={handleCloseActivityModal}>
        <ActivitiesNew onCreate={handleCreateActivity} contactId={selectedContact?.id} />
      </Modal>

      <Modal show={showContactInfoModal} onClose={handleCloseContactInfoModal}>
        {selectedContact ? (
          <div>
            <h2>{selectedContact.first_name} {selectedContact.last_name}</h2>
            <p>Email: {selectedContact.email}</p>
            <p>Phone: {selectedContact.phone_number}</p>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </Modal>
    </div>
  );
}