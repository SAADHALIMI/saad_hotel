import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles.css';

const CarteChambre = ({ chambre }) => {
  const navigate = useNavigate();

  const handleReservation = () => {
    navigate("/reservations", { state: { chambre } });
  };

  return (
    <div className="carte-chambre">
      <img src={chambre.image} alt={chambre.nom} />
      <h3>{chambre.nom}</h3>
      <p>{chambre.description}</p>
      <p><strong>Prix:</strong> {chambre.prix}DH/nuit</p>
      <button onClick={handleReservation}>Réserver</button>
    </div>
  );
};

export default CarteChambre;
