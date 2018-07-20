import React from "react";
import "./MusicianCard.css";

const MusicianCard = props => (
  <div onClick={() => props.clickedMusician(props.id)} className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default MusicianCard;