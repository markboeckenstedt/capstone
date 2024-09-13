import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Modal } from "./Modal"
import { CompaniesNew } from "./CompaniesNew";
import { CompaniesIndex } from "./CompaniesIndex";

export function CompaniesPage() {
  const [companies, setCompanies] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleIndex = () => {
    axios.get("http://localhost:3000/companies.json").then((response) => {
      setCompanies(response.data);
    }).catch((error) => {
      console.error("Error fetching companies:", error);
    });
  };

  useEffect(handleIndex, []);

  const handleCreate = (params, successCallback) => {
    axios.post("http://localhost:3000/companies.json", params).then((response) => {
      setCompanies([...companies, response.data]);
      successCallback();
      setShowModal(false);
    }).catch((error) => {
      console.error("Error creating company:", error);
    });
  };

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <h1>Companies</h1>
      <button onClick={handleOpenModal}>Add Company</button>
     
      <CompaniesIndex companies={companies}/>

      <Modal show={showModal} onClose={handleCloseModal}>
        <CompaniesNew onCreate={handleCreate}/>
      </Modal>
    </div>
  );
}