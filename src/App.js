import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import TableauOffensifComponent from './components/TableauOffensifComponent';
import TableauFinalComponent from './components/TableauFinalComponent';
import TableauClassementComponent from './components/TableauClassementComponent';
import RencontresAVenirComponent from './components/RencontresAVenir';
import RencontresEnCoursComponent from './components/RencontresEnCours';
import StatsJudokasComponent from './components/StatsJudokas';
import Top10EquipesComponent from './components/Top10Equipes';
import TopMarqueursComponent from './components/TopMarqueurs';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importez le CSS de Bootstrap
import './App.css';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src="http://preprod.rimo0631.odns.fr/wp-content/uploads/2024/07/logo-jpl.svg" className="App-logo" alt="logo" />
        </div>
        <div>
          <Nav variant="pills" defaultActiveKey={location.pathname}>
            <Nav.Item>
              <Nav.Link as={Link} to="/" active={location.pathname === "/"}>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/tableau-offensif" active={location.pathname === "/tableau-offensif"}>Tableau Offensif</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/tableau-classement" active={location.pathname === "/tableau-classement"}>Tableau Classement</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/tableau-final" active={location.pathname === "/tableau-final"}>Tableau Final</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/top-10" active={location.pathname === "/top-10"}>Top 10 équipes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/top-marqueurs" active={location.pathname === "/top-marqueurs"}>Top marqueurs</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/stats-judokas" active={location.pathname === "/stats-judokas"}>Stats judokas</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/rencontres-en-cours" active={location.pathname === "/rencontres-en-cours"}>Rencontres actuelles</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/rencontres-a-venir" active={location.pathname === "/rencontres-a-venir"}>Rencontres à venir</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </header>

      <div className="main-content">
        <Routes>
          <Route
            path="/tableau-offensif"
            element={<TableauOffensifComponent apiUrl="http://www.rimo0631.odns.fr/wp-json/custom/v2/equipes_offensives" />}
          />
          <Route
            path="/tableau-classement"
            element={<TableauClassementComponent apiUrl="http://www.rimo0631.odns.fr/wp-json/custom/v2/classement_equipes" />}
          />
          <Route
            path="/tableau-final"
            element={<TableauFinalComponent apiUrl="http://www.rimo0631.odns.fr/wp-json/custom/v2/final_rencontres" />}
          />
          <Route
            path="/top-10"
            element={<Top10EquipesComponent apiUrl="http://www.rimo0631.odns.fr/wp-json/custom/v2/classement_equipes" />}
          />
          <Route
            path="/top-marqueurs"
            element={<TopMarqueursComponent apiUrl="http://www.rimo0631.odns.fr/wp-json/custom/v2/judokas_marqueurs" />}
          />
          <Route
            path="/stats-judokas"
            element={<StatsJudokasComponent apiUrl="http://www.rimo0631.odns.fr/wp-json/custom/v2/stats_judokas" />}
          />
          <Route
            path="/rencontres-a-venir"
            element={<RencontresAVenirComponent apiUrl="http://www.rimo0631.odns.fr/wp-json/custom/v2/rencontres_suivantes" />}
          />
          <Route
            path="/rencontres-en-cours"
            element={<RencontresEnCoursComponent apiUrl="http://www.rimo0631.odns.fr/wp-json/custom/v2/rencontres_actuelles" />}
          />
          {/* Ajoutez d'autres routes pour vos autres composants ici */}
        </Routes>
      </div>
    </div>
  );
}

// Enveloppez votre App dans un Router dans un composant séparé
const MainApp = () => (
  <Router>
    <App />
  </Router>
);

export default MainApp;
