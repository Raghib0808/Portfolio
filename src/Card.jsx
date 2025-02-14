import React from 'react';

const Card = ({ im, text, heading }) => {
  return (
    <div className="frame">
      <div className="group-wrapper">
        <div className="group">
          <img className="heroicons-outline" src={`${im}.svg`} alt="icon" />
          <div className="overlap-group">
            <div className="text-wrapper">{heading}</div>
            <img className="img" src="plus.svg" alt="plus icon" />
          </div>
          <p className="div">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
