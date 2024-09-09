export function ContactsNew({ onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onCreate(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Contact</h1>
      <form onSubmit={handleSubmit}>
        <div>
          First Name: <input first_name="first_name" type="text" />
        </div>
        <div>
          Last Name: <input last_name="last_name" type="text" />
        </div>
        <div>
          Email: <input email="email" type="text" />
        </div>
        <div>
          Phone Number: <input phone_number="phone_number" type="text" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}