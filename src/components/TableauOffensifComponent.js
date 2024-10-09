import React, { useState, useEffect } from 'react';

const TableauOffensifComponent = ({ apiUrl }) => {
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
        setData(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [apiUrl]);
  

  return (
    <table className="tableau-jpl">
      <thead>
        <tr>
          <th>Rang</th>
          <th>Equipe</th>
          <th>Ippons</th>
          <th>Waza ari</th>
          <th>points</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.rang}</td>
            <td><img width="24px" height="24px" src={item.logo_circle} alt={item.logo_circle}/> {item.titre}</td>
            <td>{item.ippons_marqués}</td>
            <td>{item.wazaris_marqués}</td>
            <td>{item.points_marqués}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableauOffensifComponent;
