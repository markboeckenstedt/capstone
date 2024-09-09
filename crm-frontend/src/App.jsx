import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './Header';

import { ActivitiesPage } from './ActivitiesPage';
import { ContactsPage } from './ContactsPage';
import { CompaniesPage } from './CompaniesPage'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ActivitiesPage />} />
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
      </Routes>
    </Router>
  );
}

export default App;