export function ContactsIndex({ contacts }) {
  return (
    <div>
      <h1>All Contacts</h1>
      {contacts.map((contact) => (
        <div key={contact.id}>
          <h2>{contact.first_name} {contact.last_name}</h2>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone_number}</p>
        </div>
      ))}
    </div>
  );
}
