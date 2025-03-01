import React, { useState, useEffect } from "react";

const Confirmation = () => {
  const [reservation, setReservation] = useState(null);

  useEffect(() => {
    // Récupérer les données de réservation depuis le localStorage
    const reservationData = JSON.parse(localStorage.getItem("reservationData"));
    if (reservationData) {
      setReservation(reservationData);
    }
  }, []);

  return (
    <div className="confirmation-container">
      {reservation ? (
        <div className="confirmation-message">
          {/* Message en haut de la confirmation */}
          <p><strong>Vous pouvez maintenant voir vos informations de réservation en vous connectant à votre profil.</strong> Veuillez entrer votre email et mot de passe dans votre profil pour consulter les détails de votre réservation.</p>
          
          <h2>✅ Réservation confirmée!</h2>
          <p>Merci <strong>{reservation.nom}</strong>, votre réservation a été enregistrée avec succès.</p>
          <p><strong>Email:</strong> {reservation.email}</p>
          <p><strong>Chambre:</strong> {reservation.chambre}</p>
          <p><strong>Dates:</strong> {reservation.dateArrivee} - {reservation.dateDepart}</p>
          <p><strong>Service choisi:</strong> {reservation.service ? reservation.service.title : "Aucun"}</p>
          <p><strong>Prix total:</strong> {reservation.prixTotal} DH</p>
        </div>
      ) : (
        <p>Il n'y a pas de réservation à afficher.</p>
      )}
    </div>
  );
};

export default Confirmation;
