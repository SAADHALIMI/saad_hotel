import React from "react";
import CarteChambre from "../components/CarteChambre";

const Chambres = () => {
  const chambres = [
  {
    id: 1,
    nom: "Chambre Simple",
    description: "Chambre confortable pour une personne.",
    prix: 150,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFGbFQgkRQnanXXTCPz-CF7Njv4ZTBu1NnOw&s", // Ajouter l'URL d'une image
  },
  {
    id: 2,
    nom: "Chambre Double",
    description: "Chambre spacieuse pour deux personnes.",
    prix: 200,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNXJqk3yKTvmQ1KJ54Eo5wJXncQeMJp18PfQ&s",
  },
  {
    id: 3,
    nom: "Suite",
    description: "Suite luxueuse avec des équipements modernes.",
    prix: 250,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBVQ1kHt4ny8JV-P8ypEndGd2dUAwmne8LHQ&s",
  },
  {
    id: 1,
    nom: "Chambre Simple",
    description: "Chambre confortable pour une personne.",
    prix: 150,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmhtNHlZ7NB45zFb3zy8b3uiRyQFuLk_CaFw&s>", // Ajouter l'URL d'une image
  },
  {
    id: 2,
    nom: "Chambre Double",
    description: "Chambre spacieuse pour deux personnes.",
    prix: 200,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp8OPkgn4lUq3zlESlxh7oWHnqxGoEnOZB5Q&s",
  },
  {
    id: 3,
    nom: "Suite",
    description: "Suite luxueuse avec des équipements modernes.",
    prix: 250,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVuK80VHX88Kc0gXXEHNPM1TzvATnwo74Krw&s",
  },
  {
    id: 1,
    nom: "Chambre Simple",
    description: "Chambre confortable pour une personne.",
    prix: 150,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs3zwTUFkxXglGdY0H9LsMDPtN0r5NU2f3-Q&s", // Ajouter l'URL d'une image
  },
  {
    id: 2,
    nom: "Chambre Double",
    description: "Chambre spacieuse pour deux personnes.",
    prix: 200,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo86_3G9G7XlwjzS4bFsCXz4z0ssjy-xonwg&s",
  },
  {
    id: 3,
    nom: "Suite",
    description: "Suite luxueuse avec des équipements modernes.",
    prix: 250,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQluk3ng7eE5QEJgX9BG2zwnAnptNgoRyrA&s",
  },
];


  return (
    <div className="chambres-container">
      <h1>Nos Chambres</h1>
      <div className="liste-chambres">
        {chambres.map((chambre, index) => (
          <CarteChambre key={index} chambre={chambre} />
        ))}
      </div>
    </div>
  );
};

export default Chambres;
