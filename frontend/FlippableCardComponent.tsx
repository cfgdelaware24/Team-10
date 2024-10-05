// FlippableCardComponent.jsx
import React, { useState } from 'react';
import './flipcard.css'; // Ensure you have the styles for flipping

const FlippableCardComponent = ({ data, onTop, onRight}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleRight = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
      onRight(data[currentIndex]); // Reset flip state when navigating
    }
  };

  const handleLeft = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false); // Reset flip state when navigating
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleTop = () => {
    if (onTop) onTop(data[currentIndex]);
  };

  return (
    <div className="cardContainer">
      <button className="topArrow" onClick={handleTop}>
        ↑
      </button>
      <button onClick={handleLeft} disabled={currentIndex === 0}>
        &lt;
      </button>
      <div
        className={`card ${isFlipped ? 'flipped' : ''}`}
        onClick={handleFlip} // Flip the card on click
      >
        {isFlipped ? (
          <div className="cardBack">
            <h3>Details</h3>
            <p>{data[currentIndex].details}</p>
          </div>
        ) : (
          <div className="cardFront">
            <h3>{data[currentIndex].name}</h3>
            <p>{data[currentIndex].description}</p>
          </div>
        )}
      </div>
      <button onClick={handleRight} disabled={currentIndex === data.length - 1}>
        &gt;
      </button>
    </div>
  );
};

export default FlippableCardComponent;