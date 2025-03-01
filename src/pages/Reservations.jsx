import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const chambrePrices = {
  "Chambre Simple": 500,
  "Chambre Double": 800,
  "Suite": 1200
};

const servicesList = {
  "Restauration 🍽️": 200,
  "Salle de sport 🏋️": 150,
  "Piscine 🏊‍♂️": 100,
  "Service de chambre 🛎️": 250,
  "Location de voiture 🚗": 500
};

const Reservations = () => {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState(""); // Ajouter un état pour le mot de passe
  const [dateArrivee, setDateArrivee] = useState("");
  const [dateDepart, setDateDepart] = useState("");
  const [chambre, setChambre] = useState("");
  const [service, setService] = useState("");
  const [confirmation, setConfirmation] = useState(false);
  const [prixTotal, setPrixTotal] = useState(0);
  const navigate = useNavigate();

  // Fonction pour calculer le prix total en fonction de la chambre, des services et des dates
  const calculateTotalPrice = () => {
    // Vérifie si la chambre et la date sont définies
    if (!chambre || !dateArrivee || !dateDepart) return 0;

    // Calcul du nombre de nuits
    const start = new Date(dateArrivee);
    const end = new Date(dateDepart);
    const nights = Math.max(1, Math.ceil((end - start) / (1000 * 60 * 60 * 24)));

    // Récupère le prix de la chambre et du service
    const chambrePrice = chambrePrices[chambre] || 0;
    const servicePrice = servicesList[service] || 0;

    // Calcul du prix total
    return (chambrePrice * nights) + servicePrice;
  };

  // Met à jour le prix total quand l'utilisateur fait une sélection
  useEffect(() => {
    const total = calculateTotalPrice();
    setPrixTotal(total);
  }, [chambre, service, dateArrivee, dateDepart]);  // Recalcule le prix dès qu'il y a un changement

  const handleReservation = (e) => {
    e.preventDefault();

    // Calcul du prix total lors de la soumission du formulaire
    const totalPrice = calculateTotalPrice();
    setPrixTotal(totalPrice);

    setConfirmation(true);

    const reservationData = {
      nom,
      email,
      motDePasse,  // Ajout du mot de passe dans la réservation
      dateArrivee,
      dateDepart,
      chambre,
      service: service ? { title: service, price: servicesList[service] } : null,
      prixTotal: totalPrice
    };

    const existingReservations = JSON.parse(localStorage.getItem("reservations")) || [];
    existingReservations.push(reservationData);
    localStorage.setItem("reservations", JSON.stringify(existingReservations));
  };

  const handleRedirectServices = () => {
    navigate("/services");
  };

  return (
    <div className="reservations-container">
      <h1>La Confirmation</h1>

      {confirmation ? (
        <div className="confirmation-message">
           <p><strong>Vous pouvez maintenant voir vos informations de réservation en vous connectant à votre profil.</strong> Veuillez entrer votre email et mot de passe dans votre profil pour consulter les détails de votre réservation.</p>
          <h2>✅ Réservation Confirmée !</h2>
          <p>Merci <strong>{nom}</strong>, votre réservation est bien enregistrée.</p>
          <p><strong>Email :</strong> {email}</p>
          <p><strong>Chambre :</strong> {chambre}</p>
          <p><strong>Dates :</strong> {dateArrivee} - {dateDepart}</p>
          <p><strong>Service sélectionné :</strong> {service || "Aucun"}</p>
          <p><strong>Prix Total :</strong> {prixTotal} DH</p>
          <button onClick={() => setConfirmation(false)}>Faire une autre réservation</button>
        </div>
      ) : (
        <form className="reservation-form" onSubmit={handleReservation}>
          <label>Nom complet :</label>
          <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} required />

          <label>Email :</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label>Mot de passe :</label>
          <input 
            type="password" 
            value={motDePasse} 
            onChange={(e) => setMotDePasse(e.target.value)} 
            required 
          />

          <label>Type de chambre :</label>
          <select value={chambre} onChange={(e) => setChambre(e.target.value)} required>
            <option value="">Sélectionnez une chambre</option>
            {Object.keys(chambrePrices).map((key) => (
              <option key={key} value={key}>{key} - {chambrePrices[key]} DH/nuit</option>
            ))}
          </select>

          <label>Date d'arrivée :</label>
          <input type="date" value={dateArrivee} onChange={(e) => setDateArrivee(e.target.value)} required />

          <label>Date de départ :</label>
          <input type="date" value={dateDepart} onChange={(e) => setDateDepart(e.target.value)} required />

          <label>Sélectionnez un service :</label>
          <select value={service} onChange={(e) => setService(e.target.value)}>
            <option value="">Aucun</option>
            {Object.keys(servicesList).map((key) => (
              <option key={key} value={key}>{key} - {servicesList[key]} DH</option>
            ))}
          </select>

          <h3>💰 Prix total : {prixTotal} DH</h3>

          <button type="button" className="services-button" onClick={handleRedirectServices}>
            Voir les services
          </button>

          <button type="submit">Confirmer la réservation</button>
        </form>
      )}
    </div>
  );
};

export default Reservations;
