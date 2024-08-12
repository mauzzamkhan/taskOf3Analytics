import React from "react";
import "./HeaderTitle.css";
const HeaderTitle = ({ title, badgeValue }) => {
  return (
    <div className="headerContainer">
      <h6 className="headerTitle">{title}</h6>
      {badgeValue && (
        <div className="badgeContainer">
          <p className="badgetext">{badgeValue}</p>
        </div>
      )}
    </div>
  );
};

export default HeaderTitle;
