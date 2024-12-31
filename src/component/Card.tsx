import React from "react";
import '@/styles/Card.css'


interface CardProps {
  icon: string; // Now expects the image path as a string
  title: string;
  value: string | number;
}

const Card: React.FC<CardProps> = ({ icon, title, value }) => {
  return (
    <div className="card">
      <div className="icon">
        <img src={icon} alt="icon" style={{ width: 30, height: 30 }} /> {/* Image with defined size */}
      </div>
      <div className="details">
        <p className="title">{title}</p>
        <p className="value">{value}</p>
      </div>
    </div>
  );
};

export default Card;
