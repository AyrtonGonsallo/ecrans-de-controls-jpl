import React, { useState, useEffect } from 'react';

const RencontresEnCoursComponent = ({ apiUrl }) => {
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
    <div>
        {data.length > 0 && (
            <div className='rencontre-journee'>{data[0].journee}</div> // Affichage de la propriété 'journee' du premier élément
        )}
    {data.map((item, index) => (
        <div key={index}>
             {/* Afficher la date seulement si elle est différente de celle de la rencontre précédente */}
          {index === 0 || item.full_date_de_debut !== data[index - 1].full_date_de_debut ? (
            <div className='rencontre-date'>
              {item.full_date_de_debut}
            </div>
          ) : null}
            <div className='rencontre-grid'>
                <div className='rencontre-equipe'>{item.equipe_1} <img width="24px" height="24px" src={item.logo_circle_equipe_1} alt={item.logo_circle_equipe_1}/></div>
                <div className='rencontre-heure'>{item.heure_de_debut}</div>
                <div className='rencontre-equipe'><img width="24px" height="24px" src={item.logo_circle_equipe_2} alt={item.logo_circle_equipe_2}/> {item.equipe_2}</div>
            </div>
        </div>
    ))}
</div>
  );
};

export default RencontresEnCoursComponent;
