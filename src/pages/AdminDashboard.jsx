import React, { useEffect, useState } from "react";
import "../styles.css";

const AdminDashboard = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const storedReservations = JSON.parse(localStorage.getItem("reservations")) || [];
    setReservations(storedReservations);
  }, []);

  // Fonction pour supprimer une réservation
  const deleteReservation = (index) => {
    // Copie du tableau des réservations
    const updatedReservations = [...reservations];
    updatedReservations.splice(index, 1);  // Supprime l'élément à l'index spécifié

    // Mise à jour de l'état et du localStorage
    setReservations(updatedReservations);
    localStorage.setItem("reservations", JSON.stringify(updatedReservations));
  };

  return (
    <div className="admin-dashboard">
      <h2>📋 Liste des Réservations</h2>

      {reservations.length === 0 ? (
        <p>Aucune réservation enregistrée.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Email</th>
              <th>Chambre</th>
              <th>Dates</th>
              <th>Service</th>
              <th>Prix Total</th>
              <th>Action</th> {/* Colonne pour les actions */}
            </tr>
          </thead>
          <tbody>
            {reservations.map((res, index) => (
              <tr key={index}>
                <td>{res.nom}</td>
                <td>{res.email}</td>
                <td>{res.chambre}</td>
                <td>{res.dateArrivee} - {res.dateDepart}</td>
                <td>{res.service ? res.service.title : "Aucun"}</td>
                <td><strong>{res.prixTotal} DH</strong></td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => deleteReservation(index)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminDashboard;
