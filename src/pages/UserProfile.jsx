import React, { useState } from 'react';

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "johndoe@example.com"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez simuler l'envoi des données et les mettre à jour dans l'état
    localStorage.setItem("userInfo", JSON.stringify(userInfo)); // Sauvegarde dans le localStorage
    alert("Profil mis à jour !");
  };

  return (
    <div className="user-profile">
      <h2>Mon Profil</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nom</label>
          <input 
            type="text" 
            value={userInfo.name} 
            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })} 
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            value={userInfo.email} 
            onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })} 
            required
          />
        </div>

        <button type="submit" className="btn-submit">Mettre à jour</button>
      </form>
    </div>
  );
};

export default UserProfile;
