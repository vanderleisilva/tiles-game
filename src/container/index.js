import React from "react";
import "../App.css";

export default ({ children }) => (
  <section className="section">
    <div className="container">
      <h1 className="title">Tiles Game</h1>
      <p className="subtitle">
        Inform the grid size and <strong>start</strong> the game!
      </p>
      {children}
    </div>
  </section>
);
