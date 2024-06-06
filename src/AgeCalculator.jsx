import React, { useState } from 'react';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (!birthDate) return;

    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }

    setAge(age);
  };

  return (
    <div> 
      <h1>Age Calculator</h1>
      <div className="birthdate">
        <div className='box'>
          <h3>Date of Birth</h3>
        </div>
        <div className="box">
          <input 
            type="date" 
            value={birthDate} 
            onChange={(e) => setBirthDate(e.target.value)} 
          />
        </div>
        <div className='box'>
          <button onClick={calculateAge}>Calculate Age</button>
        </div>
      </div>
      {age !== null && (
        <div>
          <h2>Your Age is: {age}</h2>
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;
