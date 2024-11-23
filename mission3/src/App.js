import React, { useState } from 'react';
import Button from './Button';

function App() {
  const [message, setMessage] = useState('');

  const handleButtonClick = () => {
    setMessage('안녕하세요!');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Button onClick={handleButtonClick} label="클릭하세요" />
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
