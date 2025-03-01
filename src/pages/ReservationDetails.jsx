import React from 'react';
import { useParams } from 'react-router-dom';

const ReservationDetails = () => {
  const { reservationId } = useParams(); // Pour récupérer l'ID de la réservation depuis l'URL

  // Données simulées de la réservation
  const reservation = {
    id: reservationId,
    room: "Chambre Deluxe",
    checkIn: "2025-02-20",
    checkOut: "2025-02-25",
    totalPrice: "500€",
    status: "Confirmée",
    customer: "John Doe"
  };

  return (
    <div className="reservation-details">
      <h2>Détails de la Réservation</h2>
      <p><strong>Nom du client:</strong> {reservation.customer}</p>
      <p><strong>Chambre:</strong> {reservation.room}</p>
      <p><strong>Date d'arrivée:</strong> {reservation.checkIn}</p>
      <p><strong>Date de départ:</strong> {reservation.checkOut}</p>
      <p><strong>Montant Total:</strong> {reservation.totalPrice}</p>
      <p><strong>Status:</strong> {reservation.status}</p>

      <button className="btn-annuler">Annuler la réservation</button>
    </div>
  );
};

export default ReservationDetails;
