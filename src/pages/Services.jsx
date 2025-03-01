import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css"; 

const servicesList = [
  { 
    title: "Restauration (Lmakla)", 
    description: "Dégustez nos plats raffinés préparés par des chefs étoilés.", 
    image: "https://previews.123rf.com/images/geckophotos/geckophotos1812/geckophotos181200208/113703488-restauration-sous-forme-de-buffet-au-restaurant-de-l-h%C3%B4tel-gros-plan-table-de-restaurant-avec.jpg", 
    price: 200,
    
  },
  { 
    title: "Salle de sport", 
    description: "Équipez-vous et entraînez-vous avec nos équipements modernes.", 
    image: "https://www.powergym.fr/img/cms/ATX%202/salle-sport-centre-remise-forme-musculation-fitness.jpeg", 
    price: 150,
   
  },
  { 
    title: "Piscine ", 
    description: "Profitez d'un moment de détente avec nos spas et piscines.", 
    image: "https://serapool.fra1.cdn.digitaloceanspaces.com/media/13396/luks-otel-havuzlari-tasarim-trendler-ve-karo-secimi-4.jpg", 
    price: 100,
  
  },
  { 
    title: "Service de chambre", 
    description: "Profitez d’un service de chambre 24h/24 pour un confort absolu.", 
    image: "https://media.istockphoto.com/id/1209739507/fr/photo/tout-ce-dont-tu-as-besoin-serveuse-dans-le-plateau-de-livraison-duniforme-avec-la-nourriture.jpg?s=612x612&w=0&k=20&c=DfysIK7zAfsmbifTV3vVWR8kc9zjWCYzuBBi8vcry18=", 
    price: 250,
    
  },
  { 
    title: "Location de voiture", 
    description: "Louez une voiture pour découvrir la ville en toute liberté.", 
    image: "https://img.sixt.com/1600/Estepona_%7C_in_TYPO_estepona-kempinskibranch-content.jpg", 
    price: 500,
    
  },
  { 
    title: "Wi-Fi & Espace Business", 
    description: "Travaillez en toute sérénité avec une connexion rapide et un espace dédié.", 
    image: "https://group.accor.com/-/media/Corporate/News-images/2020/09/14/20200916-PopupOffices-header.jpg?vs=1&rev=00c3fd7627804bb580cd84bc0faeeb71", 
    price: 300,
    
  }
];

const Services = () => {
  const navigate = useNavigate(); 

  const handleRetour = () => {
    navigate("/reservations"); 
  };

  return (
    <div className="services-container">
      <h2>Nos Services</h2>
      <div className="services-list">
        {servicesList.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} className="service-image" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <h3><strong>Prix:</strong> {service.price} DH</h3>
            <button onClick={handleRetour} className="service-link">
              Retour
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
