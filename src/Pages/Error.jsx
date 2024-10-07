import React from 'react';
import "../Styles/Style.css"

const Error = () => {
  return (
    <div className="error-page">
      <div className="error-container">
        <h1 className="error-title">Oops! Something went wrong.</h1>
        <p className="error-subtitle">
          We can't seem to find the page you're looking for.
        </p>
        <img
          src="https://via.placeholder.com/300x200.png?text=404+Error" // Replace with your custom image
          alt="Error illustration"
          className="error-image"
        />
        <div className="error-buttons">
          <button className="primary-button" onClick={() => window.location.href = '/'}>
            Back to Home
          </button>
          <button className="secondary-button" onClick={() => window.history.back()}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
