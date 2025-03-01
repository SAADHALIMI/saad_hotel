import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles.css";

const BarreNavigation = () => {
  const [click, setClick] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleClick = () => setClick(!click);
  const toggleMenu = () => setShowMenu(!showMenu);

  const toggleLoginForm = () => {
    setShowLoginForm(true);
    setShowSignupForm(false);
  };

  const toggleSignupForm = () => {
    setShowSignupForm(true);
    setShowLoginForm(false);
  };

  // Fonction pour gérer la connexion
  const handleLogin = (e) => {
    e.preventDefault();

    // Vérifier les identifiants
    if (email === "admin@gmail.com" && password === "admin") {
      // Si les identifiants sont corrects, rediriger vers le tableau de bord
      navigate("/admin-dashboard");
    } else {
      // Récupérer les réservations depuis localStorage
      const reservations = JSON.parse(localStorage.getItem("reservations")) || [];

      // Chercher l'utilisateur correspondant à l'email et mot de passe
      const user = reservations.find(
        (user) => user.email === email && user.motDePasse === password
      );

      if (user) {
        setErrorMessage(""); // Réinitialiser l'erreur
        alert(`Bienvenue ${user.nom} !\n
          Email: ${user.email}\n
          Chambre: ${user.chambre}\n
          Date d'arrivée: ${user.dateArrivee}\n
          Date de départ: ${user.dateDepart}\n
          Service sélectionné: ${user.service ? user.service.title : "Aucun"}\n
          Prix total: ${user.prixTotal} DH`);
        navigate("/"); // Rediriger vers le profil utilisateur
      } else {
        setErrorMessage("Identifiants incorrects. Veuillez réessayer.");
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
        Saad_Hôtel
        </NavLink>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink exact to="/" className="nav-links">
              Accueil
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/chambres" className="nav-links" onClick={handleClick}>
              Chambres
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/reservations" className="nav-links" onClick={handleClick}>
              Réservations
            </NavLink>
          </li>

          {/* Nos Services avec Dropdown */}
          <li
            className="nav-item"
            onMouseEnter={() => setShowServicesMenu(true)}
            onMouseLeave={() => setShowServicesMenu(false)}
          >
            <NavLink to="services" className="nav-links">
              Nos Services 
            </NavLink>

           
          
          </li>
        </ul>

        <div className="profile-container">
          <img
            src="https://img.freepik.com/vecteurs-libre/illustration-homme-affaires_53876-5856.jpg"
            alt="Profil"
            className="profile-icon"
            onClick={toggleMenu}
          />
          {showMenu && (
            <div className="dropdown-menu">
              <button onClick={toggleLoginForm} className="dropdown-link">
                Se connecter
              </button>

              {showLoginForm && (
                <form className="login-form" onSubmit={handleLogin}>
                  <label>Email :</label>
                  <input
                    type="email"
                    placeholder="Entrez votre email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label>Mot de passe :</label>
                  <input
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button type="submit">Se connecter</button>
                </form>
              )}

              {showSignupForm && (
                <form className="login-form">
                  <label>Email :</label>
                  <input type="email" placeholder="Entrez votre email" required />
                  <label>Mot de passe :</label>
                  <input type="password" placeholder="Créer un mot de passe" required />
                  <label>Confirmer le mot de passe :</label>
                  <input type="password" placeholder="Confirmez votre mot de passe" required />
                  <button type="submit">S'inscrire</button>
                </form>
              )}

              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
          )}
        </div>

        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
};

export default BarreNavigation;
