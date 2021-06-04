import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Hobbies</h3>
      <ul>
        <li className="hobby">
          <i className="fas fa-hiking"></i>
          <span>Course à pied</span>
        </li>

        <li className="hobby">
          <i className="fas fa-running"></i>
          <span>Randonnées</span>
        </li>

        <li className="hobby">
          <i className="fas fa-seedling"></i>
          <span>Jardinage</span>
        </li>

        <li className="hobby">
          <i className="fas fa-rocket"></i>
          <span>Espace</span>
        </li>

        <li className="hobby">
          <i className="fas fa-video"></i>
          <span>Jeux</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
