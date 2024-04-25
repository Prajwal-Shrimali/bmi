import React, { useState } from 'react';
import BMICalculator from './BMICalculator';
import './App.css';

const App = () => {
  const [bmi, setBMI] = useState(null);

  const handleCalculateBMI = (calculatedBMI) => {
    setBMI(calculatedBMI);
  };

  return (
    <div>
      {/* <h1>BMI Calculator App</h1> */}
      <BMICalculator onCalculate={handleCalculateBMI} />
      {bmi !== null && (
        <div>
          <h2>Result</h2>
          <p>Your BMI is: {bmi}</p>
        </div>
      )}
    </div>
  );
};

export default App;
