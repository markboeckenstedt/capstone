export function ContactsNew({ onCreate, companyId }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = {
      contact: {
        first_name: event.target.first_name.value,
        last_name: event.target.last_name.value,
        email: event.target.email.value,
        phone_number: event.target.phone_number.value,
        company_id: companyId
      }
    };

    onCreate(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Contact</h1>
      <form onSubmit={handleSubmit}>
        <div>
          First Name: <input name="first_name" type="text" />
        </div>
        <div>
          Last Name: <input name="last_name" type="text" />
        </div>
        <div>
          Email: <input name="email" type="text" />
        </div>
        <div>
          Phone Number: <input name="phone_number" type="text" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}