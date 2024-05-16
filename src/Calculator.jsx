import React, { useState } from 'react';
import './App.css'; // Assuming you move styles.css to App.css

function App() {
  const [display, setDisplay] = useState('');

  const handleButtonClick = (value) => {
    setDisplay(display + value);
  };

  const handleDelete = () => {
    setDisplay(display.slice(0, -1));
  };

  const handleClear = () => {
    setDisplay('');
  };

  const handleEqual = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  return (
    <div className="container">
     
      <div className="display">
        <input type="text" value={display} readOnly />
      </div>
      <div className="buttons">
        <div className="row">
          <input type="button" value="7" onClick={() => handleButtonClick('7')} />
          <input type="button" value="8" onClick={() => handleButtonClick('8')} />
          <input type="button" value="9" onClick={() => handleButtonClick('9')} />
          <input type="button" value="+" onClick={() => handleButtonClick('+')} />
        </div>
        <div className="row">
          <input type="button" value="4" onClick={() => handleButtonClick('4')} />
          <input type="button" value="5" onClick={() => handleButtonClick('5')} />
          <input type="button" value="6" onClick={() => handleButtonClick('6')} />
          <input type="button" value="-" onClick={() => handleButtonClick('-')} />
        </div>
        <div className="row">
          <input type="button" value="1" onClick={() => handleButtonClick('1')} />
          <input type="button" value="2" onClick={() => handleButtonClick('2')} />
          <input type="button" value="3" onClick={() => handleButtonClick('3')} />
          <input type="button" value="*" onClick={() => handleButtonClick('*')} />
        </div>
        <div className="row">
          <input type="button" value="DEL" onClick={handleDelete} />
          <input type="button" value="0" onClick={() => handleButtonClick('0')} />
          <input type="button" value="C" onClick={handleClear} />
          <input type="button" value="." onClick={() => handleButtonClick('.')} />
          <input type="button" value="/" onClick={() => handleButtonClick('/')} />
          <input type="button" className="red" value="=" onClick={handleEqual} />
        </div>
      </div>
    </div>
  );
}

export default App;
