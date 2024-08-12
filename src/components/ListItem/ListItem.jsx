import React from "react";
import './ListItem.css';
const ListItem = ({ title, time, description }) => {
  return (
    <div className="Lisitem">
      <div className="ItemInfo"><h6 className="title">{title}</h6>
      <p className="time">{time}</p>
      </div>
      <p className="description">{description}</p>
    </div>
  );
};

export default ListItem;
