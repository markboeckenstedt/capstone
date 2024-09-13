import axios from "axios";
import { useEffect, useState } from "react";
import { ContactsIndex } from "./ContactsIndex";
import { ContactsNew } from "./ContactsNew";

export function ContactsPage() {
  const [contacts, setContacts] = useState([]);

  const handleIndex = () => {
    axios.get("http://localhost:3000/contacts.json").then((response) => {
      setContacts(response.data);
    });
  };

  const handleCreate = (params, successCallback) => {
    axios.post("http://localhost:3000/companies.json", params).then((response) => {
      setContacts([...contacts, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <ContactsIndex contacts={contacts} />
    </main>
  );
}