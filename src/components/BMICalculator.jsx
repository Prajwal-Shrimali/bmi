import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BMICalculator = ({ onCalculate }) => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  
  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };
  
  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };
  
  const calculateBMI = () => {
    if (!weight || !height) return;
    const bmi = (weight / (height * height)).toFixed(2);
    onCalculate(parseFloat(bmi));
  };
  
  return (
    <div>
      <h2>BMI Calculator</h2>
      <div>
        <label>Weight (kg):</label>
        <input type="number" value={weight} onChange={handleWeightChange} />
      </div>
      <div>
        <label>Height (m):</label>
        <input type="number" value={height} onChange={handleHeightChange} />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
    </div>
  );
};

BMICalculator.propTypes = {
  onCalculate: PropTypes.func.isRequired,
};

export default BMICalculator;
