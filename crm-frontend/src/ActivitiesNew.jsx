export function ActivitiesNew({ onCreate, contactId }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const params = {
      activity: {
        communication_type: event.target.communication_type.value,
        notes: event.target.notes.value,
        date: event.target.date.value || new Date().toISOString(),
        contact_id: contactId,  // Pass the selected contact's ID
      }
    };

    onCreate(params, () => event.target.reset());  // Reset form on success
  };

  return (
    <div>
      <h1>New Activity for Contact</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Communication Type: <input name="communication_type" type="text" />
        </div>
        <div>
          Notes: <textarea name="notes" />
        </div>
        <div>
          Date: <input name="date" type="datetime-local" defaultValue={new Date().toISOString().slice(0,16)} />
        </div>
        <button type="submit">Create Activity</button>
      </form>
    </div>
  );
}