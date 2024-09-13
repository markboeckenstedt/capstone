export function ActivitiesNew({ onCreate, contactId }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const params = {
      activity: {
        communication_type: event.target.communication_type.value,
        notes: event.target.notes.value,
        date: event.target.date.value || new Date().toISOString(),
        contact_id: contactId
      }
    };
    
    onCreate(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Activity</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Type: <input name="communication_type" type="text" />
        </div>
        <div>
          Notes: <textarea name="notes" />
        </div>
        <div>
          Date: <input name="date" type="datetime-local" defaultValue={new Date().toISOString().slice(0,16)}/>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}