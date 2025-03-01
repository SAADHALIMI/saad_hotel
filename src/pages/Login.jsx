import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Utilisation de useNavigate pour la navigation

const Login = () => {
  // Déclaration des états pour l'email, le mot de passe et le message d'erreur
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  // Déclaration du mot de passe
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();  // Pour la redirection après une connexion réussie

  // Fonction pour gérer la connexion
  const handleLogin = (e) => {
    e.preventDefault();
  
    // Vérification Admin
    if (email === "admin@gmail.com" && password === "admin") {
      navigate("/admin-dashboard");
      return;
    }
  
    // Récupérer les réservations enregistrées
    const reservations = JSON.parse(localStorage.getItem("reservations")) || [];
  
    // Chercher l'utilisateur correspondant
    const user = reservations.find(user => user.email === email && user.motDePasse === password);
  
    if (user) {
      setErrorMessage(""); // Réinitialiser l'erreur
      const reservationDetails = `
        Nom: ${user.nom}
        Chambre: ${user.chambre}
        Dates: ${user.dateArrivee} - ${user.dateDepart}
        Service: ${user.service ? user.service.title : "Aucun"}
        Prix Total: ${user.prixTotal} DH
      `;
      alert(`Bienvenue ${user.nom} !\n\nDétails de la réservation:\n${reservationDetails}`);
      navigate("/profile"); // Rediriger vers le profil
    } else {
      setErrorMessage("Identifiants incorrects. Veuillez réessayer.");
    }
  };

  return (
    <div>
      <h2>Connexion</h2>
      <form onSubmit={handleLogin}>
        <label>Email :</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}  // Mettre à jour l'email
          required
        />
        <label>Mot de passe :</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}  // Mettre à jour le mot de passe
          required
        />
        <button type="submit">Se connecter</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Login;
