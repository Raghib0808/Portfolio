import React from 'react';

const GridPhoto = ({ images }) => {
  return (
    <div className="openg">
      {images.map((src, index) => (
        <div className="ph11" key={index}>
          <img src={src} alt={`Photo ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default GridPhoto;
