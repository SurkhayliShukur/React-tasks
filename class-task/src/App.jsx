import React from 'react'
// import Header from './componets/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './componets/Button';
// import Navbars from './componets/Navbar';


function App() {
  const handleClick = (message) => {
    alert(message);
  };

  return (
    <>
      <div className='d-flex justify-start align-items-center p-3'>
        <Button label="Primary-button" onClick={() => handleClick('Primary button clicked!')} style="bg-primary" />
        <Button label="Secondary-button" onClick={() => handleClick('Secondary button clicked!')} style="bg-secondary" />
        <Button label="Danger-button" onClick={() => handleClick('Danger button clicked!')} style="bg-danger" />
      </div>
    </>
  );
}

export default App
