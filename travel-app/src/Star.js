import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Star = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div>
      {Array(fullStars)
        .fill()
        .map((_, index) => (
          <FaStar key={index} style={{ color: 'orange' }} />
        ))}

      {hasHalfStar && <FaStarHalfAlt style={{ color: 'orange' }} />}

      {Array(emptyStars)
        .fill()
        .map((_, index) => (
          <FaRegStar key={index} style={{ color: 'orange' }} />
        ))}
    </div>
  );
};

export default Star;
