import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; // Assurez-vous d'avoir un fichier CSS approprié

const Accueil = () => {
  // Tableau des images pour les cartes
  const photos = [
    { id: 1, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzpGHu89-wXJPSnOb3Gxf84hONgphvb5H5vg&s", alt: "Chambre Luxe" },
    { id: 2, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4y-LF5JLTakLyPfRv9xCCc60GpgjIdkmCyg&s", alt: "Suite Élégante" },
    { id: 3, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsMadC7IANbdC8lhXvHSZZnMkzF-Fayg7gng&s", alt: "Chambre Confort" },
    { id: 4, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUMQYWZvDd7H4ykDt4UDbD02-O819P3MMOFg&s", alt: "Chambre Moderne" },
    { id: 5, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStp1TvBRvKZSHPmCcCY4UNoCKi0xCOU5-6NQ&s", alt: "Suite Familiale" },
    { id: 6, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1n8RTZ3UVnsKX8pIaTn-lGglYHOK54mVEaA&s", alt: "Chambre Deluxe" },
    { id: 7, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv0fI0WnOSVFZKZOlk0RDNf0jxp3XUSnoiQA&s", alt: "Chambre Deluxe" },
    { id: 8, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRrAEyYE-YAG4NoQo88GTA7zLLtn-8d6s2ZQ&s", alt: "Chambre Deluxe" },
  ];

  return (
    <div>
      {/* Section avec l'image de fond */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Bienvenue à l'Hôtel De Saad_Hôtel</h1>
          <p>Découvrez nos chambres et réservez votre séjour dès maintenant !</p>
          <Link to="/chambres" className="lien-chambre">
            Voir Nos Chambres
          </Link>
        </div>
      </div>

      {/* Section des cartes en-dessous */}
      <div className="cards-section">
        <h2 className="cards-title">Nos Chambres</h2>
        <div className="cards-container">
          {photos.map((photo) => (
            <div className="card" key={photo.id}>
              <img src={photo.src} alt={photo.alt} className="card-image" />
              <div className="card-content">
                <p>{photo.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      

      {/* Section d'informations sur l'hôtel */}
      <div className="hotel-info">
        <h2>Saad_Hôtel</h2>
        <p>
          Saad_Hôtel est une chaîne internationale d'hospitalité offrant des
          hôtels, des maisons et des espaces de vie franchisés. Fondée en 2020,
          elle s'est développée dans le monde entier, avec des milliers
          d'hôtels et d'hébergements de vacances.
        </p>
        <p>
          Situé à proximité d'un parcours de golf de 18 trous, notre hôtel est
          régulièrement classé parmi les meilleurs hôtels de la région.
        </p>
        <div className="hotel-buttons">
          <button className="btn-primary">Réserver une Chambre</button>
          <button className="btn-secondary">Retour à l'Accueil</button>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
