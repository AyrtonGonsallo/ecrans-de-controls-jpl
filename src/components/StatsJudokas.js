import React, { useState, useEffect } from 'react';

const StatsJudokasComponent = ({ apiUrl }) => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 25; // Nombre d'éléments par page

  function addDomainToRelativeImageUrl(imageUrl) {
    if (!imageUrl.startsWith('http://') && !imageUrl.startsWith('https://')) {
      return "http://preprod.rimo0631.odns.fr" + imageUrl; 
    }
    return imageUrl;
  }

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [apiUrl]);

  // Filtrer les données en fonction du terme de recherche
  const filteredData = data.filter(item => 
    item.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.equipe.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Logique de pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <input 
        type="text"  className='search-input'
        placeholder="Rechercher par nom, prénom ou club..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <table className="tableau-jpl">
        <thead>
          <tr>
            <th>Image</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Club</th>
            <th>H/F</th>
            <th>T C</th>
            <th>V</th>
            <th>D</th>
            <th>Ippons</th>
            <th>Wazaris</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index}>
              <td><img width="64px" height="64px" src={addDomainToRelativeImageUrl(item.image)} alt={item.image}/></td>
              <td>{item.nom}</td>
              <td>{item.prenom}</td>
              <td><img width="24px" height="24px" src={item.logo_circle} alt={item.logo_circle}/>{item.equipe}</td>
              <td>{item.sexe}</td>
              <td>{item.matchs_individuels_joués}</td>
              <td>{item.matchs_individuels_gagnés}</td>
              <td>{item.matchs_individuels_perdus}</td>
              <td>{item.ippons_marqués}</td>
              <td>{item.wazaris_marqués}</td>
              <td>{item.points_individuels_judoka}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="pagination">
        <button className='btn-pagination' onClick={handlePrevPage} disabled={currentPage === 1}>
        « Précédent
        </button>
        <span>Page {currentPage} sur {totalPages}</span>
        <button className='btn-pagination' onClick={handleNextPage} disabled={currentPage === totalPages}>
          Suivant »
        </button>
      </div>
    </div>
  );
};

export default StatsJudokasComponent;
