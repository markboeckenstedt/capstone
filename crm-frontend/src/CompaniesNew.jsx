export function CompaniesNew({ onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = {
      company: {
        name: event.target.name.value,
        website: event.target.website.value
      }
    };
    
    onCreate(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Company</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Website: <input name="website" type="text" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}