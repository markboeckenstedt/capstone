import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './Header';
import { ActivitiesPage } from './ActivitiesPage';
import { ContactsPage } from './ContactsPage';
import { CompaniesPage } from './CompaniesPage'
import { CompanyShow } from './CompanyShow';
import { HomePage } from './HomePage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/companies/:id" element={<CompanyShow />} />
      </Routes>
    </Router>
  );
}

export default App;