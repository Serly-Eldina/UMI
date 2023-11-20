import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Navbar() { // Ganti nama fungsi menjadi "Navbar"
  const [count, setCount] = useState(0);

  return (
    <>
       <Button variant="primary">Primary</Button>{' '}
      
    </>
  );
}

export default Navbar; // Ganti nama ekspor menjadi "Navbar"
