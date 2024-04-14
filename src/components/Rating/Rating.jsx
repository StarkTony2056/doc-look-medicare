import React, { useState } from 'react';

const Rating = ({ initialRating }) => {
  // State for rating and hover state
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(null);

  // Function to handle mouse enter event
  const handleMouseEnter = (index) => {
    if (hoverRating === null) {
      setHoverRating(index);
    }
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    if (hoverRating !== null) {
      setHoverRating(null);
    }
  };

  // Function to handle click event
  const handleClick = (index) => {
    setRating(index);
  };

  // Function to handle touch event
  const handleTouchStart = (index, event) => {
    event.preventDefault(); // Prevent default touch behavior
    handleClick(index); // Call handleClick to update the rating
  };

  return (
    <div className='absolute top-4 right-8 flex gap-1'>
      {[1, 2, 3, 4, 5].map((index) => (
        <span
          key={index}
          className="text-1xl cursor-pointer"
          style={{
            color: (hoverRating || rating) >= index ? 'yellow' : 'gray',
          }}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
          onTouchStart={(event) => handleTouchStart(index, event)}
        >
          {index <= rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};

export default Rating;
