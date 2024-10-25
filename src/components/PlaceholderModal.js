import React, { useState } from 'react';

function PlaceholderModal({ isOpen, placeholders, onClose, onComplete }) {
  const [values, setValues] = useState({});

  const handleChange = (placeholder, value) => {
    setValues({ ...values, [placeholder]: value });
  };

  const handleSubmit = () => {
    onComplete(values);
    onClose();
  };

  return (
    <div style={{ display: isOpen ? 'block' : 'none' }}>
      <h2>Fill in the placeholders</h2>
      {placeholders.map((placeholder, index) => (
        <div key={index}>
          <label>{placeholder}
            <input
              type="text"
              onChange={(e) => handleChange(placeholder, e.target.value)}
              required
            />
          </label>
        </div>
      ))}
      <button onClick={handleSubmit}>Complete</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default PlaceholderModal;
