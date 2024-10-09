import React, { useState, useEffect } from 'react';

const TopMarqueursComponent = ({ apiUrl }) => {
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
          <th>Nom</th>
          <th>Prenom</th>
          <th>Équipe</th>
          <th>Combats</th>
          <th>Gagnés</th>
          <th>Ippons</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{index+1}</td>
            <td>{item.nom}</td>
            <td>{item.prenom}</td>
            <td><img width="24px" height="24px" src={item.logo_circle} alt={item.logo_circle}/> {item.equipe}</td>
            <td>{item.matchs_individuels_joués}</td>
            <td>{item.matchs_individuels_gagnés}</td>
            <td>{item.ippons_marqués}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TopMarqueursComponent;
