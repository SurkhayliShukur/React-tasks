import { useState } from "react";

function App() {
  const [color, setColor] = useState('');

  const handleChangeColor = (event) => {
    setColor(event.target.value);
  };

  return (
    <>
      <select onChange={handleChangeColor}>
        <option value="">Select a color</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
      <div style={{ backgroundColor: color, height: '100px', marginTop:"40px", width: '100%' }}>
        Color Box
      </div>
    </>
  );
}

export default App;