import axios from "axios";
import { useEffect, useState } from "react";
import { CompaniesIndex } from "./CompaniesIndex";
import { CompaniesNew } from "./CompaniesNew";
import { Modal } from "./Modal";

export function CompaniesPage() {
  const [companies, setCompanies] = useState([]);

  const handleIndex = () => {
    axios.get("http://localhost:3000/companies.json").then((response) => {
      setCompanies(response.data);
    });
  };

  const handleCreate = (params, successCallback) => {
    axios.post("http://localhost:3000/companies.json", params).then((response) => {
      setCompanies([...companies, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <CompaniesNew onCreate={handleCreate} />
      <CompaniesIndex companies={companies} />
      <Modal show={true}>
        <h1>Test</h1>
      </Modal>
    </main>
  );
}