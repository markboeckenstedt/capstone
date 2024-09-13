import { Link } from "react-router-dom";

export function CompaniesIndex({ companies }) {
  return (
    <div>
      {companies.map((company) => (
        <div key={company.id}>
          <Link to={`/companies/${company.id}`}>{company.name}</Link>
        </div>
      ))}
    </div>
  );
}