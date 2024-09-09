export function CompaniesIndex({ companies }) {
  return (
    <div>
      <h1>All Companies</h1>
      {companies.map((company) => (
        <div key={company.id}>
          <h2>{company.name}</h2>
          <p>{company.website}</p>
        </div>
      ))}
    </div>
  );
}