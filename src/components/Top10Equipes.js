import React, { useState, useEffect } from 'react';

const Top10EquipesComponent = ({ apiUrl }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        // Si vous voulez vérifier la réponse brute avant de la convertir en JSON
        console.log("Raw response:", response);
        return response.json();
      })
      .then((data) => {
        console.log("Parsed data:", data); // Afficher les données parsées
        setData(data.slice(0, 10)); // Ne prendre que les 10 premiers éléments
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [apiUrl]);
  

  return (
    <table className="tableau-jpl">
    <thead>
      <tr>
        <th>Rang</th>
        <th>Équipe</th>
        <th>Points</th>
        <th>Bonus</th>
        <th>J</th>
        <th>V</th>
        <th>D</th>
        <th>N</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          <td>{item.rang}</td>
          <td><img width="24px" height="24px" src={item.logo_circle} alt={item.logo_circle}/> {item.titre}</td>
          <td>{item.points}</td>
          <td>{item.bonus}</td>
          <td>{item.matchs_joues}</td>
          <td>{item.victoires}</td>
          <td>{item.defaites}</td>
          <td>{item.nuls}</td>
        </tr>
      ))}
    </tbody>
  </table>
  );
};

export default Top10EquipesComponent;
