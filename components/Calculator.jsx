import React, { useState } from 'react';
 

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [n1, setN1] = useState();
  const [n2, setN2] = useState();

  function addition() {
    setResult(Number(n1) + Number(n2));
  }

  function subtraction() {
    setResult(Number(n1) - Number(n2));
  }

  function multiplication() {
    if (n1 == 0 || n2 == 0) {
      setResult("Cannot multiply by zero");
    } else {
      setResult(Number(n1) * Number(n2));
    }
  }

  function division() {
    if (n2 == 0) {
      setResult("Cannot divide by zero");
    } else {
      setResult(Number(n1) / Number(n2));
    }
  }

  return (
    <div className="container">
      <input type="number" onChange={(e) => setN1(e.target.value)} />
      <input type="number" onChange={(e) => setN2(e.target.value)} />
      <div className="result">{result}</div>
      <div className="calc-buttons">
        <button onClick={addition}>+</button>
        <button onClick={subtraction}>-</button>
        <button onClick={multiplication}>*</button>
        <button onClick={division}>/</button>
      </div>
    </div>
  );
};

export default Calculator;
